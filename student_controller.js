 const express = require('express');
const router = express.Router();
const Student = require('./student_schema'); // Import the Student model

// Create a new student
const registerStudent = async (req, res) => {
    const { firstName, lastName, age, studentClass } = req.body;
    try {
    // Check if student already exists
    const existingStudent = await Student.findOne({ firstName, lastName });
    if (existingStudent) {
        return res.status(400).json({ message: 'Student already exists' });
    }

    // Check if all required fields are provided
    if (!firstName || !lastName || !age || !studentClass) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Create a new student instance
    const student = new Student({ firstName, lastName, age, studentClass });
    
    // Save the student to the database
    await student.save();
    
    res.status(201).json({ message: 'Student created successfully', student });
}catch (error) {
        res.status(500).json({ message: 'Error creating student', error: error.message });
    }
};

// Get all students
const getStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error: error.message });
    }
};

// Get a student by ID
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student', error: error.message });
    }
};

// Update a student by ID
const updateStudentById = async (req, res) => {
    try {
        const { firstName, lastName, age, studentClass } = req.body;
        const student = await Student.findByIdAndUpdate(
            req.params.id,
            { firstName, lastName, age, studentClass },
            { new: true }
        );
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully', student });
    } catch (error) {
        res.status(500).json({ message: 'Error updating student', error: error.message });
    }
};

// Delete a student by ID
const deleteStudentById = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error: error.message });
    }
};


// Export the controller functions
module.exports = {
    registerStudent,
    getStudents,
    getStudentById,
    updateStudentById,
    deleteStudentById
};