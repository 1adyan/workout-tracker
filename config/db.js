// Import mongoose for MongoDB connection
const mongoose = require('mongoose');

/**
 * Connect to MongoDB database
 * Uses connection string from environment variable
 * @returns {Promise} 
 */
const connectDB = async () => {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log('MongoDB Connected Successfully');
        console.log(`Database: ${mongoose.connection.name}`);
        
    } catch (error) {
        // Log error and exit process if connection fails
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1);
    }
};


module.exports = connectDB;