import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import Guest from '@/models/Guest';

// GET - Fetch all guests for the authenticated user
export async function GET(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();

    const guests = await Guest.find({ userId: session.user.id })
      .sort({ createdAt: -1 })
      .lean();

    return NextResponse.json({ guests }, { status: 200 });
  } catch (error) {
    console.error('Error fetching guests:', error);
    return NextResponse.json({ error: 'Failed to fetch guests' }, { status: 500 });
  }
}

// POST - Create a new guest
export async function POST(request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name, email, phone } = body;

    if (!name || !name.trim()) {
      return NextResponse.json({ error: 'Guest name is required' }, { status: 400 });
    }

    await connectDB();

    const guest = await Guest.create({
      userId: session.user.id,
      name: name.trim(),
      email: email?.trim() || '',
      phone: phone?.trim() || '',
      attendingStatus: 'pending',
      message: 'Not replied yet',
    });

    return NextResponse.json({ guest }, { status: 201 });
  } catch (error) {
    console.error('Error creating guest:', error);
    return NextResponse.json({ error: 'Failed to create guest' }, { status: 500 });
  }
}
