const mongoose = require('mongoose');


// Define a simple schema and model
const studentSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    age: {
        type: Number,
        required: true,
        min: 0
    },
    studentClass: {
        type: String,
        required: true
    },
}, {
        timestamps: true,
        versionKey: false
    }
);

const Student = mongoose.model('Student', studentSchema);

module.exports = Student; // Export the Student model for use in other files