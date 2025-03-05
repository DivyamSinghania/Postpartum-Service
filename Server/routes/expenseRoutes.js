const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Expense = require('../models/Expense');

// Add expense
router.post('/add', auth, async (req, res) => {
    try {
        const { amount, description, category } = req.body;
        
        const expense = new Expense({
            amount,
            description,
            category,
            user: req.user.userId // This comes from the auth middleware
        });

        await expense.save();
        res.status(201).json({ message: "Expense added successfully", expense });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Get all expenses for a user
router.get('/list', auth, async (req, res) => {
    try {
        const expenses = await Expense.find({ user: req.user.userId });
        res.json(expenses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;