const express = require('express');
const router = express.Router();
const Student = require('./student_schema'); // Import the Student model
const { registerStudent, getStudents, getStudentById, updateStudentById, deleteStudentById } = require('./student_controller');

// Create a new student
router.post('/students', registerStudent);

// Get all students
router.get('/students', getStudents);

// Get a student by ID
router.get('/students/:id', getStudentById);

// Update a student by ID
router.put('/students/:id', updateStudentById);

// Delete a student by ID
router.delete('/students/:id', deleteStudentById);



// Export the router
module.exports = router;