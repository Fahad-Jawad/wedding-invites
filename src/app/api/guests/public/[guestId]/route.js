import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Guest from '@/models/Guest';
import mongoose from 'mongoose';

// GET - Fetch guest information (public, no auth required)
export async function GET(request, { params }) {
  try {
    // In Next.js 15, params is a Promise
    const { guestId } = await params;

    if (!mongoose.Types.ObjectId.isValid(guestId)) {
      return NextResponse.json({ error: 'Invalid guest ID' }, { status: 400 });
    }

    await connectDB();

    const guest = await Guest.findById(guestId).lean();

    if (!guest) {
      return NextResponse.json({ error: 'Guest not found' }, { status: 404 });
    }

    return NextResponse.json({ guest }, { status: 200 });
  } catch (error) {
    console.error('Error fetching guest:', error);
    return NextResponse.json({ error: 'Failed to fetch guest' }, { status: 500 });
  }
}
