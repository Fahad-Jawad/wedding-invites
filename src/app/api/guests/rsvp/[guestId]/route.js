import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Guest from '@/models/Guest';
import mongoose from 'mongoose';

// POST - Submit RSVP response (public, no auth required)
export async function POST(request, { params }) {
  try {
    // In Next.js 15, params is a Promise
    const { guestId } = await params;

    if (!mongoose.Types.ObjectId.isValid(guestId)) {
      return NextResponse.json({ error: 'Invalid guest ID' }, { status: 400 });
    }

    const body = await request.json();
    const { name, email, guests, message, attending } = body;

    await connectDB();

    const guest = await Guest.findById(guestId);

    if (!guest) {
      return NextResponse.json({ error: 'Guest not found' }, { status: 404 });
    }

    // Update guest information with RSVP response
    if (name) guest.name = name;
    if (email) guest.email = email;
    if (guests !== undefined) guest.numberOfGuests = guests;
    if (message) guest.message = message;

    // Update attending status based on the response
    if (attending !== undefined) {
      // Handle both boolean and string values
      if (typeof attending === 'string') {
        guest.attendingStatus = attending === 'attending' ? 'attending' : 'not_attending';
      } else {
        guest.attendingStatus = attending ? 'attending' : 'not_attending';
      }
    }

    await guest.save();

    return NextResponse.json({
      message: 'RSVP submitted successfully',
      guest
    }, { status: 200 });
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    return NextResponse.json({ error: 'Failed to submit RSVP' }, { status: 500 });
  }
}
