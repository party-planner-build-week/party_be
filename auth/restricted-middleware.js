const jwt = require('jsonwebtoken')

const secrets = require('../config/secrets.js')

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if (token) {
        jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
            if (err) {
                res.status(401).json({ you: 'You must be logged in to view that.'})
            } else {
                req.decodedJwt = decodedToken;
                console.log(decodedToken.subject)
                next();
            }
        });
    } else {
        res.status(401).json({ you: 'Access Denied'})
    }
}