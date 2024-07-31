const mongoose = require('mongoose');

// Create schema
const city_schema = new mongoose.Schema({
    city_name: { type: String, required: true },
    city_description: { type: String, required: true },
    hotel: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Hotel'
    }]
});

module.exports = mongoose.model('City', city_schema);
