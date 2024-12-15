const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { initializeDatabase } = require('./db/db-init');

dotenv.config();
const app = express();

app.use(cors());

app.use(express.json());

initializeDatabase();

const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');
app.use('/api/auth', authRoutes);
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

