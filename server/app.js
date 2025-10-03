require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(compression());
app.use(cors({ origin: "http://localhost:5173" }));

// Routes
app.use("/api/users", userRoutes);
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/tasks", taskRoutes);

app.get("/api/health", (req, res) => {
  res.json({ message: "API is running" });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
