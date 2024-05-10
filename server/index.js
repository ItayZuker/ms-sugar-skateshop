require('dotenv').config()

const express = require('express')
const cors = require('cors')
const connectDB = require('./config/db')
const path = require('path')

const app = express()

// Password wall
const basicAuth = require('basic-auth-connect')
const authMiddleware = basicAuth(process.env.TEMP_USERNAME_WALL, process.env.TEMP_PASSWORD_WALL)
app.use((req, res, next) => {
  if (req.path.startsWith('/images/') || req.path.startsWith('/og-images/')) {
    return next()
  }
  authMiddleware(req, res, next)
})

// Middlewares
app.use(express.json())
app.use(cors())

// Serve static files for emails assets outside the website
app.use(express.static('public'))

// Routes
const settingsRout = require('./routs/settings.rout.js')
app.use('/settings', settingsRout)

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
  const filePath = path.resolve(__dirname, '..', 'client', 'build', 'index.html')
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading file:', err)
      return res.status(500).send('Server error')
    }

    // Dynamically modify HTML content based on the request
    let modifiedData = data
      .replaceAll('%OG_TITLE%', 'Ms-Sugar Skateshop')
      .replaceAll('%OG_DESCRIPTION%', 'Ms-Sugar Skateshop')
      .replaceAll('%OG_URL%', 'https://ms-sugar.com')
      .replaceAll('%OG_IMAGE%', 'https://ms-sugar.com/og-images/og-image-main.jpg');

    // // Set no-cache headers to ensure the dynamically modified page is not cached
    // res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate')
    // res.setHeader('Pragma', 'no-cache')
    // res.setHeader('Expires', '0')

    res.send(modifiedData)
  })
})

// Database connection
connectDB()

// Start the server
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})