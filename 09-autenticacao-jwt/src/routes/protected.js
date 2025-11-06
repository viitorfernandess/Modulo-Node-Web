// Importa o módulo Express para poder usar suas funções
const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')

// Cria um "roteador" (Router) — uma mini-instância do Express usada para organizar rotas
const protectedRouter = express.Router()

protectedRouter.get('/dashboard',authMiddleware, (req, res) => {
    res.json({ message: 'Esta é a área protegida'})
})

// Exporta o roteador para que ele possa ser importado e usado em outro arquivo (ex: server.js)
module.exports = protectedRouter