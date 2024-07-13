const cors = require('cors')

const allowedOrigins = [
  'http://localhost:5000',
  'https://ms-sugar.com',
  'https://www.ms-sugar.com'
]

const corsConfig = () => {
  return cors({
    origin: function (origin, callback) {
 
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin) {
        console.log('Request with no origin');
        return callback(null, true);
      }
      
      const isAllowed = allowedOrigins.filter(allowed => origin.indexOf(allowed) !== -1)
      if (isAllowed) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
  })
}

module.exports = corsConfig