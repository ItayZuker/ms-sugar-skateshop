require('dotenv').config()

const express = require('express')
const router = express.Router()

const SettingsModel = require('../models/settings.model.js')

/* Routes */
router.get('/', async (req, res) => {
  try {
      const settings = await SettingsModel.find({})
      if (settings) {

          const data = settings.map(item => ({ [item.name]: item.value }))

          res.status(200).json(data)
      } else {
          res.status(404).send('Settings not found')
      }
  } catch (error) {
    res.status(500).send('Error fetching Settings')
  }
})
  
module.exports = router