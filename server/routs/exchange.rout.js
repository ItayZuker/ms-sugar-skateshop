require('dotenv').config()

const express = require('express')
const router = express.Router()

const { sendMail } = require("../lib/emailService.js")
const { getDiscountCode } = require("../lib/shopifyService.js")
const { isValidEmail, isValidName, isValidText, isValidIAgree, isValidTextDir } = require('../lib/isValidaService.js')
const { getTextareaAsHTML } = require('../lib/globalService.js')

const ExchangeModel = require('../models/exchange.model.js')
const SettingsModel = require('../models/settings.model.js')

/* Routes */
router.post("/", async (req, res) => {
    try {
        const { text, name, email, iAgree, textDir } = req.body

        const settings = await SettingsModel.findOne({ name: "exchange"})

        isValidText({ text, maxCharacters: settings?.value?.maxCharacters })
        isValidName({ name })
        isValidEmail({ email })
        isValidIAgree({ iAgree })
        isValidTextDir({ textDir })

        const textAsHTML = getTextareaAsHTML({ textareaString: text })
        
        const { discountCode } = await getDiscountCode()

        await sendMail({
            templateName: "send_discount_code_to_client",
            sendTo: email,
            data: { text: textAsHTML, name, discountCode }
        })

        await sendMail({
            templateName: "send_text_to_ms_sugar",
            sendTo: "contact@ms-sugar.com",
            data: { text: textAsHTML, name, email, iAgree, textDir }
        })

        const newExchange = new ExchangeModel({ textAsHTML, name, email, iAgree, textDir })

        await newExchange.save()

        return res.status(200).json({ message: "Exchange message sent successfully" })

    } catch (err) {
        res.status(500).json({
            message: "An error occurred",
            error: err.message
        })
    }
})

module.exports = router