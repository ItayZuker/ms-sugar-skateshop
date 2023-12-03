require('dotenv').config();

const express = require('express');
// const session = require('express-session');
const cors = require('cors');
// const passport = require('passport');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Passport configuration
// require('./config/passport.js')(passport); // Adjust the path as per your project structure

// Session setup
// app.use(session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true }));

// Initialize Passport and restore authentication state, if any, from the session
// app.use(passport.initialize());
// app.use(passport.session());

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
// const signupRout = require('./routs/signup.rout.js')
const msSugarRout = require('./routs/ms-sugar.rout.js');
// app.use('/signup', signupRout)
app.use('/ms-sugar', msSugarRout);

// Error handling middleware
const errorHandler = require('./lib/errorHandler');
app.use(errorHandler);

// Serve static files from React app
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

// Database connection
connectDB();

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});