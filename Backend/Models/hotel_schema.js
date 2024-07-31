const mongoose = require('mongoose');

// Create schema
const hotel_schema = new mongoose.Schema({
    hotel_name: { type: String, required: true },
    hotel_review: { type: Number, required: true },
    hotel_price: { type: String, required: true },
});

module.exports = mongoose.model('Hotel', hotel_schema);
