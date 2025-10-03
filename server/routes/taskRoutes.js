const express = require('express');
const router = express.Router();
const { getTasks, createTask, deleteTask } = require('../controllers/taskController');

// GET all tasks
router.get('/', getTasks);

// POST a new task
router.post('/', createTask);

// DELETE a task by ID
router.delete('/:id', deleteTask);

module.exports = router;
