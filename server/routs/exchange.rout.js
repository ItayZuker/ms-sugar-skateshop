require('dotenv').config();

const express = require('express')
const nodemailer = require('nodemailer');
const router = express.Router()



const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 587,
    secure: false,
    auth: {
        user: 'contact@ms-sugar.com',
        pass: process.env.SMTP_AUTH_PASS
    }
});



router.post("/", async (req, res) => {
    try {

        const { text, name, email, iAgree, textDir } = req.body

        if (!name || !email || !text || !iAgree) {
            return res.status(400).json({ message: "Text, Name, Email and approval of terms are required." });
        }
        const mailOptions = {
            from: email,
            to: 'contact@ms-sugar.com',
            subject: 'New Exchange Form Website',
            text
        };
        
        // Upload to DB

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: "Message sent successfully" });
    } catch (err) {
        res.status(500).json({
            message: "An error occurred",
            error: err.message
        });
    }
})

module.exports = router;