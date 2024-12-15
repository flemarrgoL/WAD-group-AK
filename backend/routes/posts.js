const express = require('express');
const { getAllPosts, createPost, updatePost, likePost, deletePost } = require('../models/postModel');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Get all posts (protected)
router.get('/', authMiddleware, async (req, res) => {
    try {
        const posts = await getAllPosts();
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Create a new post (protected)
router.post('/post', authMiddleware, async (req, res) => {
    const { title, content } = req.body;
    const userId = req.user.userId; // Extracted from JWT
    try {
        const newPost = await createPost(content, userId);
        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Update an existing post (protected)
router.put('/:postId', authMiddleware, async (req, res) => {
    const { postId } = req.params;
    const { title, content } = req.body;
    const userId = req.user.userId; // Extracted from JWT
    try {
        const updatedPost = await updatePost(postId, content, userId);
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found or not authorized to edit.' });
        }
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Increment the likes of a post by 1
router.put('/:postId/like', async (req, res) => {
    const { postId } = req.params; // Extracted from JWT
    try {
        const updatedPost = await likePost(postId);
        if (!updatedPost) {
            return res.status(404).json({ message: 'Post not found or not authorized to like.' });
        }
        res.json(updatedPost);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Delete a post (protected)
router.delete('/:postId', authMiddleware, async (req, res) => {
    const { postId } = req.params;
    const userId = req.user.userId; // Extracted from JWT

    try {
        const deletedPost = await deletePost(postId, userId);
        if (!deletedPost) {
            return res.status(404).json({ message: 'Post not found or not authorized to delete.' });
        }
        res.json(deletedPost);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
