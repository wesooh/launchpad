import React, { useEffect, useState } from "react";

function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState(null);

  // Fetch tasks
  const fetchTasks = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/tasks");
      if (!res.ok) throw new Error("Failed to fetch tasks");
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add task
  const handleAddTask = async () => {
    if (!newTask) return;
    try {
      const res = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTask }),
      });
      if (!res.ok) throw new Error("Failed to add task");
      const task = await res.json();
      setTasks([...tasks, task]);
      setNewTask("");
    } catch (err) {
      setError(err.message);
    }
  };

  // Delete task
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/tasks/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete task");
      setTasks(tasks.filter((task) => task._id !== id));
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <input
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="New task title"
      />
      <button onClick={handleAddTask}>Add Task</button>

      {tasks.length > 0 ? (
        <ul>
          {tasks.map((task) => (
            <li key={task._id}>
              {task.title}{" "}
              <button onClick={() => handleDelete(task._id)}>Delete</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No tasks yet.</p>
      )}
    </div>
  );
}

export default Dashboard;
