const mongoose = require('mongoose');


const buildingSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('buildings', buildingSchema);
