const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
    he: {
        pointer: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        contentAsHTML: {
            type: String,
            required: true
        },
    },
    en: {
        pointer: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        contentAsHTML: {
            type: String,
            required: true
        },
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const LegalSchema = mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: true
    },
    sections: [SectionSchema]
})

const LegalModel = mongoose.model('legal', LegalSchema)

module.exports = LegalModel