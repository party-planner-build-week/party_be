const jwt = require('jsonwebtoken')

module.exports = role => {
    return function(req, res, next) {
        if (req.decodedJwt.roles && req.decodedJwt.roles.includes(role)) {
            next()
        } else {
            res.status(403).json({ you: `You don't have the proper role to view this`})
        }
    }
}