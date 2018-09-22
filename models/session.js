const mongoose = require('mongoose');
const mongodb = require('mongodb');
const Schema = mongoose.Schema;

// Create Schema
const Sessionschema = new Schema({
  userId: {
    type: String,
    default: ''
  },
  timestamp: {
    type: Date,
    default: Date.now()
  },
  isDeleted: {
    type: Boolean,
    default: false
  }
});

module.exports = Session = mongoose.model('Session', Sessionschema);
