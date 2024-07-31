const mongoose = require('mongoose');

// Create schema
const state_schema = new mongoose.Schema({
    state_name: { type: String, required: true },
    state_description: { type: String, required: true },
    city: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City'
    }]
});

module.exports = mongoose.model('State', state_schema);
