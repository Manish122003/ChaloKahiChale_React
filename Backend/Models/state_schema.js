
const mongoose = require('mongoose');

const state_schema = new mongoose.Schema({
  state_name: { type: String, required: true },
  state_description: { type: String, required: true },
  image_urls: { type: [String], required: true }
});

module.exports = mongoose.model('State', state_schema);
