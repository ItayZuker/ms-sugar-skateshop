require('dotenv').config()

const express = require('express')
const router = express.Router()

const FAQModel = require('../models/faq.model.js')

/* Routes */
router.get('/', async (req, res) => {
  try {
      const FAQs = await FAQModel.find({})
      if (FAQs) {
          res.status(200).json(FAQs)
      } else {
          res.status(404).send('FAQ not found')
      }
  } catch (error) {
    res.status(500).send('Error fetching FAQs')
  }
})
  
module.exports = router