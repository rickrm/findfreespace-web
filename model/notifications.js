const mongoose = require('mongoose');


const notificationsSchema = mongoose.Schema({
    _id: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    requestedRoomIDs: {
        type: Array,
        required: true,
    },
    searching: {
        type: Boolean,
        default: true,
    },
    cooldown: {
        type: Float32Array,
        default: 0.0,
    }
});

module.exports = mongoose.model('buildings', buildingSchema);
