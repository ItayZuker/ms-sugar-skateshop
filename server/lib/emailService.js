const nodemailer = require('nodemailer')

const TemplateModel = require('../models/template.model.js')

/* Settings */
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
    return Object.keys(data).reduce((currentTemplate, key) => {
        const pattern = `{{\\s*${key}\\s*}}`;
        const regex = new RegExp(pattern, 'g');
        return currentTemplate.replace(regex, data[key]);
    }, templateHTML);
};

const sendMail = async ({ templateName, data, sendTo }) => {
    try {
        const { templateHTML, templateSubject } = await TemplateModel.findOne({ templateName })

        const mail = {
            from: 'contact@ms-sugar.com',
            to: sendTo,
            subject: templateSubject,
            html: getTemplateWithVariables({ templateHTML, data })
        }

        return await transporter.sendMail(mail)

    } catch (error) {
        throw new Error("Email sending failed: " + error.message)
    }
}

module.exports = { sendMail }