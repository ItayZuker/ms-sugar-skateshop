require('dotenv').config();

const express = require('express')
const router = express.Router()

const { sendMail } = require("../lib/emailService.js")
const { isValidEmail, isValidMessage } = require('../lib/isValidaService.js')
const { getTextareaAsHTML } = require('../lib/globalService.js')

const SettingsModel = require('../models/settings.model.js')

/* Routes */
router.post("/", async (req, res) => {
    try {
        const { message, email } = req.body

        const settings = await SettingsModel.findOne({ name: "exchange"})

        isValidMessage({ message, maxCharacters: settings?.value?.maxCharacters })
        isValidEmail({ email })

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