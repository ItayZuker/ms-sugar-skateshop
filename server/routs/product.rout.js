require('dotenv').config()

const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

const { sendMail } = require("../lib/emailService.js")
const NotificationModel = require('../models/Notification.model.js')

/* Settings */
// const transporter = nodemailer.createTransport({
//     host: 'smtpout.secureserver.net',
//     port: 587,
//     secure: false,
//     auth: {
//         user: 'contact@ms-sugar.com',
//         pass: process.env.SMTP_AUTH_PASS
//     }
// })

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
                    body: "Product added to your notification list, make sure you got the confirmation to your email."
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
                body: "Product added to your notification list, make sure you got the confirmation to your email."
            }
        }
    }
}

/* Routes */
router.post("/", async (req, res) => {
    try {

        const { email, product } = req.body

        if (!email) {
            return res.status(400).json({
                message: "An error occurred",
                error: {
                    title: "",
                    body: "Email is required."
                }
            })
        }

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

        // const mailOptions = {
        //     from: email,
        //     to: 'contact@ms-sugar.com',
        //     subject: 'Product Notification',
        //     text: "TODO: Confirmation message"
        // }
        
        // await transporter.sendMail(mailOptions)
        // console.log("product: ", product.title)
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