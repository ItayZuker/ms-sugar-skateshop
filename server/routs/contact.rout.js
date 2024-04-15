require('dotenv').config();

const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()

const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,                // 587 Standard port for SMTP over TLS
    secure: true,            // True for 465, false for other ports
    auth: {
        user: 'contact@ms-sugar.com', // Your full email address
        pass: process.env.SMTP_AUTH_PASS // Email password from environment variables
    }
});

/* Routs */
router.post("/", async (req, res) => {
    try {

        const { message, email } = req.body
        
        if (!email || !message) {
            return res.status(400).json({ message: "Email and message are required." })
        }

        const mailOptions = {
            from: email,
            to: 'contact@ms-sugar.com',
            subject: 'New Contact Message',
            text: message,
            html: ""
        }
        
        console.log("mailOptions: ", mailOptions)

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