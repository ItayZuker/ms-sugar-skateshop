require('dotenv').config();

const express = require('express')
const router = express.Router()

const { sendMail } = require("../lib/emailService.js")
const { isValidEmail, isValidMessage } = require('../lib/isValidaService.js')
const { getTextareaAsHTML } = require('../lib/globalService.js')

/* Routes */
router.post("/", async (req, res) => {
    try {
        const { message, email } = req.body

        isValidEmail({ email })
        isValidMessage({ message, maxCharacters: 1000 })

        const messageAsHTML = getTextareaAsHTML({ textareaString: message })

        await sendMail({
            templateName: "send_contact_form_to_ms_sugar",
            sendTo: "contact@ms-sugar.com",
            data: { message: messageAsHTML, email }
        })

        return res.status(200).json({ message: "Contact message sent successfully" })

    } catch (err) {
        res.status(500).json({
            message: "An error occurred",
            error: err.message
        })
    }
})

module.exports = router