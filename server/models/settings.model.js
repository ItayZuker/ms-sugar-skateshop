const mongoose = require('mongoose')

const settingsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  value: {
    type: Object,
    required: true
  }
})

const SettingsModel = mongoose.model('settings', settingsSchema)

module.exports = SettingsModel