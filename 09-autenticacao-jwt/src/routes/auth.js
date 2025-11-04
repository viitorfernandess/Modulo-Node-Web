// Importa o módulo Express para poder usar suas funções
const express = require('express')

// Cria um "roteador" (Router) — uma mini-instância do Express usada para organizar rotas
const authRouter = express.Router()

const users = require('../models/users')

authRouter.post('/register', (req, res) => {
    const { username, password } = req.body

    const user = { username, password }
    users.push(user)

    res.status(201).json(user)
})

authRouter.post('/login', (req, res) => {
    const { username, password } = req.body

    const user = users.find(user => user.username === username)
    if (!user || user.password !== password) {
        return res.status(401).json({ message: 'Credenciais inválidas' })
    }

    res.json({})
})

// Exporta o roteador para que ele possa ser importado e usado em outro arquivo (ex: server.js)
module.exports = authRouter
