const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';

const auth = (req, res, next) => {
    try {
        // Get token from header
        const token = req.header('Authorization')?.replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ 
                success: false, 
                message: 'No authentication token, access denied' 
            });
        }

        // Verify token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // Add user info to request
        req.userId = decoded.userId;
        req.email = decoded.email;
        
        next();
    } catch (error) {
        console.error('Auth middleware error:', error);
        res.status(401).json({ 
            success: false, 
            message: 'Token is invalid or expired' 
        });
    }
};

module.exports = auth;
