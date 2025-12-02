import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import TemplateData from '@/models/TemplateData';
import User from '@/models/User';
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

    const { templateNumber, content } = await request.json();

    // Validate template number
    if (![1, 2, 3, 4].includes(templateNumber)) {
      return NextResponse.json(
        { error: 'Invalid template number' },
        { status: 400 }
      );
    }

    if (!content) {
      return NextResponse.json(
        { error: 'No content provided' },
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
      { error: 'An error occurred while saving' },
      { status: 500 }
    );
  }
}

// GET endpoint to retrieve saved template data
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    await dbConnect();

    const templateData = await TemplateData.findOne({ userId: session.user.id });

    if (!templateData) {
      return NextResponse.json(
        { error: 'No template data found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      data: {
        templateNumber: templateData.templateNumber,
        content: templateData.content,
        updatedAt: templateData.updatedAt,
      },
    });
  } catch (error) {
    console.error('Get template error:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}
