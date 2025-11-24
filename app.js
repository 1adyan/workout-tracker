// Importing modules that are required
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

// Import routes
const workoutRoutes = require('./routes/workoutRoutes');

// Initialize Express app
const app = express();

// Setting port to 3000
const PORT = process.env.PORT || 3000;

// Database connection which was imported from config
const connectDB = require('./config/db');
connectDB();

// Set view engine to EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/', workoutRoutes);

// Handling for the 404 errors
app.use((req, res) => {
    res.status(404).send('<h1>404 - Page Not Found</h1><p>The page you are looking for does not exist.</p>');
});

// Starting server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Visit: http://localhost:${PORT}`);
});