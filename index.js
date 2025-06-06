const express = require('express');
const mongoose = require('mongoose');
// Import the connectDB function from db.js
const connectDB = require('./db.js'); // Import the connectDB function
// Import the Student model
const Student = require('./student_schema'); // Import the Student model
// Import the student routes
const studentRoutes = require('./student_routes'); // Import the student routes

// Initialize the express application
const app = express();

app.use(express.json()); //Middleware to parse json body

app.use('/', studentRoutes); // Use the student routes for all requests starting with '/'

// Connect to the database
connectDB(); // Call the connectDB function to connect to MongoDB

// Define a simple route
app.get('/', (req, res) =>{
    res.send('Hello world');
});


// Start the server
const port = 3000;
app.listen(port, (req, res)=> { 
    console.log(`Server is running on localhost:${port}`);
});