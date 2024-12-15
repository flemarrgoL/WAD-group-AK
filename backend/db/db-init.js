const pool = require('./db');

async function initializeDatabase() {
    const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    );
  `;

    const createPostsTableQuery = `
    CREATE TABLE IF NOT EXISTS posts (
      id SERIAL PRIMARY KEY,
      author VARCHAR(255) NOT NULL,
      date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      content TEXT NOT NULL,
      image VARCHAR(255),
      likes INTEGER DEFAULT 0
    );
  `;

    try {
        await pool.query(createUsersTableQuery);
        await pool.query(createPostsTableQuery);
        const client = await pool.connect();
        try {
            // For checking if the tables were actually created
            const res = await client.query("SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'");
            console.log('Tables in webDB:');
            res.rows.forEach(row => console.log(row.table_name));
        } catch (err) {
            console.error('Error listing tables:', err);
        } finally {
            client.release();
        }
        console.log('Database tables initialized.');
    } catch (err) {
        console.error('Error initializing database:', err);
        throw err;
    }
}

module.exports = { initializeDatabase };
