require('dotenv').config()

const express = require('express')
const router = express.Router()

const SettingsModel = require('../models/settings.model.js')

/* Routes */
router.get('/', async (req, res) => {
  try {
    const settings = await SettingsModel.find({})

    if (settings.length === 0) {
      return res.status(404).send('Settings not found')
    }

    const mergedObject = settings.reduce((accumulator, {name, value}) => {
      accumulator[name] = value
      return accumulator
    }, {})

    return res.status(200).json(mergedObject)
  } catch (error) {
    res.status(500).send('Error fetching Settings')
  }
})
  
module.exports = router