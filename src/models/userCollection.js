/*
  * @file userCollection.js 
  * This file mainly used to define the schema for the MongoDB database using Mongoose model/library.
  * In this file, I am going to define the fields for the users collection, 
  * here all fields are mandatory and email must be unique
  */

const mongoose = require('mongoose');
const userCollection = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  address: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  status: { type: String, default: 'active' },
  register_at: { type: Date, default : Date.now }
});
module.exports = mongoose.model('Users', userCollection);
