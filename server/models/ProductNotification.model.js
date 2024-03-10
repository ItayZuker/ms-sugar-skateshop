const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    idNumber: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const notificationSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    products: [ProductSchema]
})

const NotificationModel = mongoose.model('notification', notificationSchema)

module.exports = NotificationModel