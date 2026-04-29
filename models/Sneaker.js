const mongoose = require('mongoose');

const SneakerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, default: "$" },
  gender: { type: String, required: true },
  image: { type: String, required: true },
  category: { type: String, required: true },
  brand: { type: String, required: true },
  imageThumbnails: [{ type: String }],
  description: { type: String, required: true }
});

module.exports = mongoose.model('Sneaker', SneakerSchema);