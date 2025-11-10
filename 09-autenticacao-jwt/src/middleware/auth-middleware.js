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

        const user = req.user = users.find(user => user.username === decodedToken.username)
        if (!user) {
            return res.status(401).json({ message: 'Usuário inválido' })
        }

        req.authenticatedUser = user

        next()
    } catch (error) {
        return res.status(401).json({ message: 'Token inválido' })
    }
}

module.exports = authMiddleware
