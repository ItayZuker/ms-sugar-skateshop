require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Middlewares
app.use(express.json())
app.use(cors())

// Serve static files for emails assets outside the website
app.use(express.static('public'))

// Routes
const contactRout = require('./routs/contact.rout.js')
app.use('/contact', contactRout)

const exchangeRout = require('./routs/exchange.rout.js')
app.use('/exchange', exchangeRout)

const productRout = require('./routs/product.rout.js')
app.use('/product', productRout)

const legalRout = require('./routs/legal.rout.js')
app.use('/legal', legalRout)

const faqRout = require('./routs/faq.rout.js')
app.use('/faq', faqRout)

// Error handling middleware
const { errorHandler } = require('./lib/errorService')
app.use(errorHandler)

// Serve static files from React app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')))

// SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})

// Database connection
connectDB()

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})