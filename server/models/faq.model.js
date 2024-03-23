const mongoose = require('mongoose')

const faqSchema = new mongoose.Schema({
  questionAsHTML: {
    type: String,
    required: true
  },
  answerAsHTML: {
    type: String,
    required: true
  },
  tags: [String],
  category: {
    type: String,
    requoierd: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})

const FAQ = mongoose.model('FAQ', faqSchema)

module.exports = FAQ