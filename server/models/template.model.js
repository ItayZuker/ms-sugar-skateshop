const mongoose = require('mongoose')

const templateSchema = new mongoose.Schema({
  templateName: {
    type: String,
    required: true
  },
  templateHTML: {
    type: String,
    required: true
  },
  templateSubject: {
    type: String,
    required: true
  }
})

const TemplateModel = mongoose.model('template', templateSchema)

module.exports = TemplateModel