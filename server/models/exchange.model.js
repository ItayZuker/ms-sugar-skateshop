const mongoose = require('mongoose')

const exchangeSchema = new mongoose.Schema({
  textAsHTML: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  iAgree: {
    type: Boolean,
    required: true
  },
  textDir: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const ExchangeModel = mongoose.model('exchange', exchangeSchema)

module.exports = ExchangeModel