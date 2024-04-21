require('dotenv').config()

const express = require('express')
const nodemailer = require('nodemailer')
const router = express.Router()
const { v4: uuidv4 } = require('uuid')

const ExchangeModel = require('../models/exchange.model.js')
const TemplateModel = require('../models/template.model.js')

const Shopify = require('shopify-api-node')

/* Settings */
const shopify = new Shopify({
    shopName: process.env.SHOPIFY_SHOP_NAME,
    accessToken: process.env.SHOPIFY_DISCOUNT_APP_ACCESS_TOKEN
})

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'contact@ms-sugar.com',
        pass: process.env.SMTP_AUTH_APP_PASS
    }
})

/* Functions */
const getTemplateWithVariables = ({ templateHTML, data }) => {

    const { name, discountCode, textAsHTML, email, iAgree, textDir } = data

    return templateHTML
        .replaceAll("{{name}}", name)
        .replaceAll("{{discountCode}}", discountCode)
        .replaceAll("{{textAsHTML}}", textAsHTML)
        .replaceAll("{{email}}", email)
        .replaceAll("{{iAgree}}", iAgree)
        .replaceAll("{{textDir}}", textDir)
}

const sendMail = async ({ templateName, data, sendTo }) => {
    try {
        const { code } = await shopify.discountCode.create(process.env.SHOPIFY_DISCOUNT_ID, {
            code: uuidv4()
        })

        const { templateHTML, templateSubject } = await TemplateModel.findOne({ templateName })

        data.discountCode = code
        
        const mailToClient = {
            from: 'contact@ms-sugar.com',
            to: sendTo,
            subject: templateSubject,
            html: getTemplateWithVariables({ templateHTML, data })
        }

        return await transporter.sendMail(mailToClient)

    } catch (error) {
        throw(error)
    }
}


const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const isValidName = (name) => {
    return typeof name === 'string' && name.trim().length > 0 && name.trim().length < 50
}

const isValidText = (text) => {
    return typeof text === 'string' && text.trim().length > 0
}

const isBoolean = (iAgree) => {
    return typeof iAgree === 'boolean'
}

/* Routes */
router.post("/", async (req, res) => {
    try {

        const { text, name, email, iAgree, textDir } = req.body

        if (!isValidEmail(email) || !isValidName(name) || !isValidText(text) || !isBoolean(iAgree)) {
            return res.status(400).json({
                message: "An error occurred.",
                error:  "Invalid input data provided." })
        }

        const textAsHTML = text.replace(/\n/g, '<br>')

        const data = { textAsHTML, name, email, iAgree, textDir }

        await sendMail({
            templateName: "send_discount_code_to_client",
            sendTo: data.email,
            data
        })

        await sendMail({
            templateName: "send_text_to_ms_sugar",
            sendTo: "contact@ms-sugar.com",
            data
        })

        const newExchange = new ExchangeModel({ textAsHTML, name, email, iAgree, textDir })

        await newExchange.save()

        return res.status(200).json({ message: "Exchange message sent successfully" })

    } catch (err) {
        res.status(500).json({
            message: "An error occurred",
            error: err.message
        });
    }
})

module.exports = router