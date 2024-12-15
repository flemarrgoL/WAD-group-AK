const pool = require('../db/db');

// Get all posts
async function getAllPosts() {
    const result = await pool.query('SELECT * FROM posts ORDER BY date DESC, id ASC');
    return result.rows;
}

// Create a new post
async function createPost(content, userId) {
    console.log(content, userId);
    const result = await pool.query(
        'INSERT INTO posts (author, content) VALUES ($1, $2) RETURNING *',
        [userId, content]
    );
    return result.rows[0];
}

async function likePost(postId) {
    // Increment the likes count by 1
    const result = await pool.query(
        `UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING *`,
        [postId]
    );

    return result.rows[0];
}

// Update an existing post
async function updatePost(postId, content, userId) {
    const result = await pool.query(
        `UPDATE posts SET content = $1 WHERE id = $2 AND user_id = $3 RETURNING *`,
        [content, postId, userId]
    );
    return result.rows[0];
}

// Delete a post
async function deletePost(postId, userId) {
    const result = await pool.query(
        'DELETE FROM posts WHERE id = $1 AND user_id = $2 RETURNING *',
        [postId, userId]
    );
    return result.rows[0];
}

module.exports = {
    getAllPosts,
    createPost,
    updatePost,
    likePost,
    deletePost,
};
