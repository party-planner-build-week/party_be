const jwt = require('jsonwebtoken')

module.exports = role => {
    return function(req, res, next) {
        if (req.decodedJwt.subject)
    }
}