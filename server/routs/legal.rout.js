require('dotenv').config()

const express = require('express')
const router = express.Router()

const LegalModel = require('../models/legal.model.js')

router.get('/', async (req, res) => {
    try {
        const documents = await LegalModel.find({})
        if (documents) {
            res.status(200).json(documents)
        } else {
            res.status(404).send('Document not found')
        }
    } catch (error) {
      res.status(500).send('Error fetching legal documents')
    }
  })

// router.post('/upload-placeholder-legal', async (req, res) => {
//     try {
//         // Using the placeholderLegalDocument defined above
//         const legalDocument = new LegalModel({
//             type: "termsAndConditions",
//             sections: [
//                 {
//                     title: "Introduction",
//                     pointer: "introduction",
//                     contentAsHTML: "<p>Welcome to our website. These <strong>terms and conditions</strong> govern your use of our site and services, including all pages within this website (collectively referred to below as this 'Website'). By accessing this Website, you agree to be bound by these terms and conditions. If you disagree with any part of these terms and conditions, please do not use our Website.</p>"
//                 },
//                 {
//                     title: "User Agreement",
//                     pointer: "user-agreement",
//                     contentAsHTML: "<p>This <strong>User Agreement</strong> outlines the terms under which you may use our services. The use of our services constitutes acceptance of this User Agreement. You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer, and you agree to accept responsibility for all activities that occur under your account or password.</p>"
//                 },
//                 {
//                     title: "Privacy Policy",
//                     pointer: "privacy-policy",
//                     contentAsHTML: "<p>We are committed to protecting the privacy and security of our users. Our <a href='/privacy-policy'>Privacy Policy</a>, linked to from the bottom of our webpages, explains how we collect, use, and disclose information about our users. By using the site, you agree to the terms of this Privacy Policy.</p>"
//                 },
//                 {
//                     title: "Payment Policy",
//                     pointer: "payment-policy",
//                     contentAsHTML: "<p>Our <strong>Payment Policy</strong> provides information about the payment methods that our website accepts and any additional payment terms or conditions. Please review our Payment Policy carefully before completing any purchase, as making a purchase indicates your agreement to these terms.</p>"
//                 },
//                 {
//                     title: "Amendments",
//                     pointer: "amendments",
//                     contentAsHTML: "<p>We reserve the right to amend these terms and conditions at any time. All amendments to these terms will be posted online. Continued use of this Website will be deemed to constitute acceptance of the new terms and conditions.</p>"
//                 },
//                 {
//                     title: "Contact Us",
//                     pointer: "contact-us",
//                     contentAsHTML: "<p>If you have any questions about these terms and conditions, please <a href='mailto:contact@example.com'>email us at contact@example.com</a>. We are committed to providing quality services and ensuring that your use of our website is pleasant and productive.</p>"
//                 }
//             ]                        
//         })
  
//         await legalDocument.save();
//         res.status(201).send('Placeholder legal document uploaded successfully.')
//     } catch (error) {
//         res.status(500).send('Error uploading placeholder legal document')
//     }
// })
  
module.exports = router