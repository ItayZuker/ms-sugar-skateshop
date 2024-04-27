require('dotenv').config()

const express = require('express')
const router = express.Router()

const LegalModel = require('../models/legal.model.js')

/* Routes */
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
  
module.exports = router