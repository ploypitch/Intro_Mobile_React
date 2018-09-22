const mongoose = require('mongoose');
const mongodb = require('mongodb');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

// Create Schema
const Loginschema = new Schema({
  Email: {
    type: String,
    default: ''
  },
  Username: {
    type: String,
    default: ''
  },
  Password: {
    type: String,
    default: ''
  },
  Birthday: {
    type: Date,
    default: Date.now()
  }
});

Loginschema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
};
Loginschema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.Password);
};

module.exports = Login = mongoose.model('Login', Loginschema);
