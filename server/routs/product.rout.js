require('dotenv').config()

const express = require('express')
const router = express.Router()

const { sendMail } = require("../lib/emailService.js")
const { isValidEmail, isValidProductName } = require('../lib/isValidaService.js')

const NotificationModel = require('../models/Notification.model.js')

/* Functions */
const updateNotification = async ({ email, product }) => {

    const existingEntry = await NotificationModel.findOne({ email })

    if (existingEntry) {
        const productExists = existingEntry.products.some(p => p.idNumber === product.idNumber)
        if (productExists) {
            return {
                success: false,
                message: {
                    title: "",
                    body: "This product is already in your notification list."
                }
            }
        } else {
            await NotificationModel.findOneAndUpdate({ email }, { $push: { products: product } })
            return {
                success: true,
                message: {
                    title: "Great!",
                    body: "Product added to your notification list, make sure you got the confirmation to your email (It might take a few minutes)."
                }
            }
        }
    } else {
        const newEntry = new NotificationModel({
            email,
            products: [product]
        });
        await newEntry.save();
        return {
            success: true,
            message: {
                title: "Great!",
                body: "Product added to your notification list, make sure you got the confirmation to your email (It might take a few minutes)."
            }
        }
    }
}

/* Routes */
router.post("/", async (req, res) => {
    try {

        const { email, product } = req.body

        isValidEmail({ email })
        isValidProductName({ productName: product?.title })

        if (!product) {
            return res.status(400).json({
                message: "An error occurred",
                error: {
                    title: "Sorry :(",
                    body: "Product information is missing, please try again later."
                }
            })
        }

        const updateResponse = await updateNotification({ email, product })
        
        if (!updateResponse.success) {
            return res.status(409).json({
                message: "An error occurred",
                error: updateResponse.message
            })
        }

        await sendMail({
            templateName: "send_notification_confirmation_to_client",
            sendTo: email,
            data: { productName: product.title }
        })

        res.status(200).json({
            message: updateResponse.message
        })
    } catch (err) {
        res.status(500).json({
            message: "An error occurred",
            error: {
                title: "Server Error",
                body: err.message
            }
        })
    }
})

module.exports = router