const mongoose = require('mongoose');

const AnnouncementSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    participants: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    recruitmentStartDate: {
        type: Date,
        required: true
    },
    recruitmentEndDate: {
        type: Date,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    role: {
        type: [String],
        required: true
    },
    agriculturalPractices: {
        type: [String],
        required: true
    },
    canReceiveGuests: {
        type: Boolean,
        required: true
    },
    accommodationType: {
        type: [String],
        required: true
    },
    places: {
        type: Map,
        of: Number,
        required: true
    },
    facilities: {
        type: [String],
        required: true
    },
    canOfferFood: {
        type: Boolean,
        required: true
    },
    diet: {
        type: [String],
        required: true
    },
    // mealPrices: {
    //     currency: { type: String, required: true },
    //     breakfast: { type: Number, required: false },
    //     lunch: { type: Number, required: false },
    //     dinner: { type: Number, required: false }
    // },
    image: {
        type: String,
        required: false
    },
    file: {
        type: String,
        required: false
    },
    host: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const AnnouncementModel = mongoose.model('announcements', AnnouncementSchema);

module.exports = AnnouncementModel;
