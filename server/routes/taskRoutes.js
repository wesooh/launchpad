const express = require("express");
const router = express.Router();
const { getTasks, createTask, deleteTask } = require("../controllers/taskController");
const { protect } = require("../middleware/authMiddleware");

router.get("/", protect, getTasks);
router.post("/", protect, createTask);
router.delete("/:id", protect, deleteTask);

module.exports = router;
