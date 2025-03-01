const mongoose = require('mongoose');
const ExperiencerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const ExperiencerModel = mongoose.model('experiencers', ExperiencerSchema);

module.exports = ExperiencerModel;
