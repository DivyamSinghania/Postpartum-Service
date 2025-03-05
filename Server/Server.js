require('dotenv').config({ path: "./server/.env" });  // Load environment variables
const express = require('express');  // Import Express
const mongoose = require('mongoose');  // Import Mongoose
const connectDB = require("./config");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const expenseRoutes = require("./routes/expenseRoutes"); // Add this line
const cors = require("cors");

const app = express();

app.use(cors({
    origin: ["http://localhost:5173","http://127.0.0.1:5500"], // Allow requests from this frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
const PORT = 5000;

// Connect to MongoDB
connectDB();

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/expenses', expenseRoutes); // Add this line

// Signup and Login routes
const { signup, login } = require("./controllers/authController");
app.post("/signup", signup); // Use the signup function from authController
app.post("/login", login); // Use the login function from authController

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});