const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  imagePath: {
    type: String,
    required: true,
    trim: true,
    get: (val) => {
      return encodeURI(`http://specoper99.fikracamp.com/${val}`);
    },
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  department: {
    type: String,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    trim: true,
  },
  size: {
    type: String,
    trim: true,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  date: {
    type: Date,
    default: Date.now,
  }
});

const Product = mongoose.model('Product-Mustafa', productSchema);
module.exports = Product;
