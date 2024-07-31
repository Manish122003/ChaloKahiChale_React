const mongoose = require('mongoose');

const city_schema = new mongoose.Schema({
  city_name: { type: String, required: true },
  city_description: { type: String, required: true },
  state: { type: String, required: true },
  image_urls: { type: [String], required: true }
});

module.exports = mongoose.model('City', city_schema);
