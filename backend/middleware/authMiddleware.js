const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware to verify JWT and protect routes
function authMiddleware(req, res, next) {
    // Get the token from the request header
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Authorization token missing or invalid.' });
    }

    // Extract the token
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded; // Attach the decoded user data to the request object
        next(); // Proceed to the next middleware or route handler
    } catch (err) {
        return res.status(403).json({ message: 'Invalid or expired token.' });
    }
}

module.exports = authMiddleware;
