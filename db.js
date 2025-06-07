const mongoose = require('mongoose');

// Function to connect to MongoDB
// This function will be called in index.js to establish the connection
const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/myFirstDB', {
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = connectDB; // Export as a function