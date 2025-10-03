require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(compression());

// Routes
app.get("/api/health", (req, res) => {
  res.json({ message: "API is running" });
});

// Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app;
