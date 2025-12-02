import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import TemplateData from '@/models/TemplateData';
import User from '@/models/User';
import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { findImagesToDelete, deleteImages } from '@/lib/imageUtils';

export async function POST(request) {
  try {
    // Check if user is authenticated
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const formData = await request.formData();
    const templateNumber = parseInt(formData.get('templateNumber'));
    const contentString = formData.get('content');

    // Validate template number
    if (![1, 2, 3, 4].includes(templateNumber)) {
      return NextResponse.json(
        { error: 'Invalid template number' },
        { status: 400 }
      );
    }

    if (!contentString) {
      return NextResponse.json(
        { error: 'No content provided' },
        { status: 400 }
      );
    }

    let content;
    try {
      content = JSON.parse(contentString);
    } catch (e) {
      return NextResponse.json(
        { error: 'Invalid content format' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Check if user has selected this template
    const user = await User.findById(session.user.id);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    if (user.selectedTemplate !== templateNumber) {
      return NextResponse.json(
        { error: 'This template is not selected for your account' },
        { status: 403 }
      );
    }

    // Get existing template data to find old images
    const existingTemplateData = await TemplateData.findOne({ userId: session.user.id });
    const oldContent = existingTemplateData?.content || null;

    // Create uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!existsSync(uploadsDir)) {
      await mkdir(uploadsDir, { recursive: true });
    }

    // Process all uploaded files and replace their paths in content
    const fileEntries = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('file_') && value instanceof File) {
        const fieldName = key.replace('file_', '');

        // Validate file type
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/webp'];
        if (!allowedTypes.includes(value.type)) {
          return NextResponse.json(
            { error: `Invalid file type for ${fieldName}. Only images are allowed.` },
            { status: 400 }
          );
        }

        // Validate file size (max 5MB)
        if (value.size > 5 * 1024 * 1024) {
          return NextResponse.json(
            { error: `File too large for ${fieldName}. Maximum size is 5MB.` },
            { status: 400 }
          );
        }

        const bytes = await value.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Generate unique filename
        const timestamp = Date.now();
        const originalName = value.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const filename = `${session.user.id}_${timestamp}_${originalName}`;
        const filepath = path.join(uploadsDir, filename);

        // Write file
        await writeFile(filepath, buffer);

        // Store the mapping
        fileEntries.push({
          fieldName,
          url: `/uploads/${filename}`
        });
      }
    }

    // Update content with uploaded file URLs
    for (const fileEntry of fileEntries) {
      const fieldPath = fileEntry.fieldName.split('.');
      let obj = content;

      // Navigate to the nested field
      for (let i = 0; i < fieldPath.length - 1; i++) {
        const key = fieldPath[i];
        // Handle array indices
        if (!isNaN(key)) {
          obj = obj[parseInt(key)];
        } else {
          obj = obj[key];
        }
      }

      // Set the final value
      const finalKey = fieldPath[fieldPath.length - 1];
      if (!isNaN(finalKey)) {
        obj[parseInt(finalKey)] = fileEntry.url;
      } else {
        obj[finalKey] = fileEntry.url;
      }
    }

    // Delete old images that are no longer in use
    let deletedImagesCount = 0;
    if (oldContent) {
      const imagesToDelete = findImagesToDelete(oldContent, content);
      if (imagesToDelete.length > 0) {
        console.log(`Found ${imagesToDelete.length} old images to delete:`, imagesToDelete);
        deletedImagesCount = await deleteImages(imagesToDelete);
      }
    }

    // Upsert template data (update if exists, create if not)
    const templateData = await TemplateData.findOneAndUpdate(
      { userId: session.user.id },
      {
        userId: session.user.id,
        templateNumber,
        content,
        updatedAt: Date.now(),
      },
      {
        upsert: true,
        new: true,
      }
    );

    return NextResponse.json({
      success: true,
      message: 'Template data saved successfully',
      filesUploaded: fileEntries.length,
      filesDeleted: deletedImagesCount,
      data: {
        id: templateData._id,
        templateNumber: templateData.templateNumber,
        updatedAt: templateData.updatedAt,
      },
    });
  } catch (error) {
    console.error('Save template error:', error);
    return NextResponse.json(
      { error: 'An error occurred while saving', details: error.message },
      { status: 500 }
    );
  }
}
