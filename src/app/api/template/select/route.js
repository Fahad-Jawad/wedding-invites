import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';

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

    const { templateNumber } = await request.json();

    // Validate template number
    if (![1, 2, 3, 4].includes(templateNumber)) {
      return NextResponse.json(
        { error: 'Invalid template number' },
        { status: 400 }
      );
    }

    await dbConnect();

    // Update user's selected template
    const user = await User.findByIdAndUpdate(
      session.user.id,
      { selectedTemplate: templateNumber },
      { new: true }
    );

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      message: 'Template selected successfully',
      selectedTemplate: user.selectedTemplate,
    });
  } catch (error) {
    console.error('Template selection error:', error);
    return NextResponse.json(
      { error: 'An error occurred' },
      { status: 500 }
    );
  }
}
