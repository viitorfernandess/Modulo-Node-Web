const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    console.log(authHeader)

    next()
}

module.exports = authMiddleware