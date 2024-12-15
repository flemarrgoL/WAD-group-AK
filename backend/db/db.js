require('dotenv').config(); // Load environment variables from .env

const { Pool } = require('pg');

// Configure PostgreSQL connection pool
const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});


// Test the connection
pool.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch((err) => console.error('Error connecting to PostgreSQL:', err));

module.exports = pool;
