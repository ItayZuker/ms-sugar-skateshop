const mongoose = require('mongoose')

// const faqSchema = new mongoose.Schema({
//   language: {
//     type: String,
//     required: true
//   },
//   questionAsHTML: {
//     type: String,
//     required: true
//   },
//   answerAsHTML: {
//     type: String,
//     required: true
//   },
//   tags: [String],
//   category: {
//     type: String,
//     required: true
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// })

const faqSchema = new mongoose.Schema({
  he: {
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
      required: true
    }
  },
  en: {
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
      required: true
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const FAQ = mongoose.model('FAQ', faqSchema)

module.exports = FAQ