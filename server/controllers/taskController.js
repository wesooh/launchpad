const Task = require("../models/taskModel");

// GET /api/tasks
const getTasks = async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
};

// POST /api/tasks
const createTask = async (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ message: "Title required" });
  const task = await Task.create({ title });
  res.status(201).json(task);
};

// DELETE /api/tasks/:id
const deleteTask = async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json({ message: "Task deleted" });
};

module.exports = { getTasks, createTask, deleteTask };
