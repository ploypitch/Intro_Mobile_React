const mongoose = require('mongoose');
const mongodb = require('mongodb');
const Schema = mongoose.Schema;

//Create Schema
const Itemschema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
    default: 0
  },
  pricerate: {
    type: Number,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  imgpath: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', Itemschema);
