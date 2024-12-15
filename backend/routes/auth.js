const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUserByEmail } = require('../models/userModel');

const router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET;

// Signup route
router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user already exists
        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return res.status(400).json({ message: 'Email already in use.' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create the user
        const newUser = await createUser(email, hashedPassword);
        res.status(201).json(newUser);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // Compare passwords
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid email or password.' });
        }

        // Generate JWT token
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
