const jwt = require('jsonwebtoken')

const secretKey = 'palavra-chave-super-secreta'

const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization

    if (!authHeader) {
        return res.status(401).json({ message: 'Token não fornecido' })
    }

    const token = authHeader.split(' ')[1]

    try {
        const decodedToken = jwt.verify(token, secretKey)
        console.log(decodedToken)
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' })
    }
}

module.exports = authMiddleware