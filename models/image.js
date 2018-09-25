const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const Itemschema = new Schema({
  name: {
    type: String,
    required: true
  },
  imgpath: {
    type: String,
    required: true
  }
});

module.exports = Item = mongoose.model('item', Itemschema);
