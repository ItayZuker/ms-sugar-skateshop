const cors = require('cors')

const allowedOrigins = [
  'http://localhost:3000',
  'https://ms-sugar.com',
  'https://www.ms-sugar.com'
]

const corsConfig = () => {
  return cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) return callback(null, true)
      if (allowedOrigins.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  })
}

module.exports = corsConfig