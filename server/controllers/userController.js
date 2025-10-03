// controllers/userController.js
const User = require('../models/userModel');

// SIGNUP
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

  const existingUser = await User.findOne({ email });
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  const user = await User.create({ email, password });
  res.status(201).json({ _id: user._id, email: user.email });
};

// LOGIN
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.status(400).json({ message: 'Email and password are required' });

  const user = await User.findOne({ email });
  if (!user || user.password !== password) return res.status(401).json({ message: 'Invalid credentials' });

  res.json({ _id: user._id, email: user.email });
};

module.exports = { signupUser, loginUser }; // ✅ must be object with functions
