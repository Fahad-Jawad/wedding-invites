import mongoose from 'mongoose';

const guestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    attendingStatus: {
      type: String,
      enum: ['pending', 'attending', 'not_attending'],
      default: 'pending',
    },
    message: {
      type: String,
      default: 'Not replied yet',
    },
    numberOfGuests: {
      type: Number,
      default: 1,
    },
  },
  {
    timestamps: true,
  }
);

// Create compound index for faster queries
guestSchema.index({ userId: 1, createdAt: -1 });

export default mongoose.models.Guest || mongoose.model('Guest', guestSchema);
