const pool = require('../db/db');

// Create a new user (signup)
async function createUser(email, hashedPassword) {
    const result = await pool.query(
        'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email',
        [email, hashedPassword]
    );
    return result.rows[0];
}

// Find a user by email (for login)
async function findUserByEmail(email) {
    const result = await pool.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
    );
    return result.rows[0];
}

module.exports = {
    createUser,
    findUserByEmail,
};
