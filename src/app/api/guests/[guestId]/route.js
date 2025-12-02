import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import connectDB from '@/lib/mongodb';
import Guest from '@/models/Guest';
import mongoose from 'mongoose';

// PUT - Update guest information
export async function PUT(request, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { guestId } = params;

    if (!mongoose.Types.ObjectId.isValid(guestId)) {
      return NextResponse.json({ error: 'Invalid guest ID' }, { status: 400 });
    }

    const body = await request.json();
    const { name, email, phone, attendingStatus, message, numberOfGuests } = body;

    await connectDB();

    const guest = await Guest.findOne({ _id: guestId, userId: session.user.id });

    if (!guest) {
      return NextResponse.json({ error: 'Guest not found' }, { status: 404 });
    }

    // Update fields
    if (name !== undefined) guest.name = name.trim();
    if (email !== undefined) guest.email = email.trim();
    if (phone !== undefined) guest.phone = phone.trim();
    if (attendingStatus !== undefined) guest.attendingStatus = attendingStatus;
    if (message !== undefined) guest.message = message;
    if (numberOfGuests !== undefined) guest.numberOfGuests = numberOfGuests;

    await guest.save();

    return NextResponse.json({ guest }, { status: 200 });
  } catch (error) {
    console.error('Error updating guest:', error);
    return NextResponse.json({ error: 'Failed to update guest' }, { status: 500 });
  }
}

// DELETE - Delete a guest
export async function DELETE(request, { params }) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { guestId } = params;

    if (!mongoose.Types.ObjectId.isValid(guestId)) {
      return NextResponse.json({ error: 'Invalid guest ID' }, { status: 400 });
    }

    await connectDB();

    const guest = await Guest.findOneAndDelete({ _id: guestId, userId: session.user.id });

    if (!guest) {
      return NextResponse.json({ error: 'Guest not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Guest deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting guest:', error);
    return NextResponse.json({ error: 'Failed to delete guest' }, { status: 500 });
  }
}
