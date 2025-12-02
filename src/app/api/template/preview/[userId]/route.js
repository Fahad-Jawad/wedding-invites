import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import TemplateData from '@/models/TemplateData';
import User from '@/models/User';

export async function GET(request, { params }) {
  try {
    // Await params in Next.js 15
    const { userId } = await params;

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Find the user to verify they exist
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Find the template data for this user
    const templateData = await TemplateData.findOne({ userId });

    if (!templateData) {
      return NextResponse.json(
        { error: 'No template data found for this user' },
        { status: 404 }
      );
    }

    // Return the template data
    return NextResponse.json({
      success: true,
      data: {
        userId: user._id,
        userName: user.name,
        templateNumber: templateData.templateNumber,
        content: templateData.content,
        updatedAt: templateData.updatedAt,
      },
    });
  } catch (error) {
    console.error('Preview fetch error:', error);
    return NextResponse.json(
      { error: 'An error occurred while fetching template data' },
      { status: 500 }
    );
  }
}
