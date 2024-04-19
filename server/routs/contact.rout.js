require('dotenv').config();

const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'contact@ms-sugar.com',
        pass: process.env.SMTP_AUTH_APP_PASS
    }
})

/* Routs */
router.post("/", async (req, res) => {
    try {

        const { message, email } = req.body
        
        if (!email || !message) {
            return res.status(400).json({ message: "Email and message are required." })
        }

        const mailOptions = {
            from: 'contact@ms-sugar.com',
            to: 'contact@ms-sugar.com',
            subject: 'New Contact Message',
            text: `You have received a new message from: ${email}\n\nMessage:\n${message}`, // plaintext body
            html: `<p>You have received a new message from: <strong>${email}</strong></p><p>Message:</p><p>${message}</p>` // html body
        }

        await transporter.sendMail(mailOptions)
        res.status(200).json({ message: "Message sent successfully" })

    } catch (err) {
        res.status(500).json({
            message: "An error occurred",
            error: err.message
        })
    }
})

module.exports = router