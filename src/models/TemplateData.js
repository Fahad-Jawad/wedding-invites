import mongoose from 'mongoose';

const TemplateDataSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true, // One template per user
  },
  templateNumber: {
    type: Number,
    required: true,
    enum: [1, 2, 3, 4],
  },
  content: {
    type: mongoose.Schema.Types.Mixed,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Update the updatedAt timestamp before saving
TemplateDataSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.TemplateData || mongoose.model('TemplateData', TemplateDataSchema);
