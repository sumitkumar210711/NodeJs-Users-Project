/*
    * @file authMidlleware.js
    * This authMiddleware.js is a main security part/layer which allow the user to access the protected routes only if the
    * user is authenticated and authorized.
    * It uses third party library for authentication and authorization.
    */

const jwt = require('jsonwebtoken');

// This function generates a JWT token for the user after a successfull registration with their  generated ID and coordinates.
const generateToken = (userId, latitude, longitude) => {
    return jwt.sign({ id: userId, latitude:latitude, longitude:longitude }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const auth = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) return res.status(403).send("No token is Provided");
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Invalid Token... Access Denied");
    }
    return next();
};

module.exports = {
    auth,
    generateToken
};

