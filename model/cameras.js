const mongoose = require('mongoose');

const camerasSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    room_num: {
        type: String,
        required: true
    },
    floor: {
        type: Number,
        required: true,
    },
    num_of_people: {
        type: Number,
        default: 0,
    },
    building: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model('cameras', camerasSchema);

