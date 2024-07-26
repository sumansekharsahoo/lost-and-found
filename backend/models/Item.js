const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  status: { type: String, required: true, enum: ['lost', 'found'] },
  location: {
    type: { type: String, enum: ['Point'], required: true },
    coordinates: { type: [Number], required: true },
  },
  date: { type: Date, required: true },
  image: { type: String },
}, { timestamps: true });

itemSchema.index({ location: '2dsphere' });

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;