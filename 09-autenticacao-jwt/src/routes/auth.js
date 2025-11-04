// Importa o módulo Express para poder usar suas funções
const express = require('express')

// Cria um "roteador" (Router) — uma mini-instância do Express usada para organizar rotas
const authRouter = express.Router()

// Exporta o roteador para que ele possa ser importado e usado em outro arquivo (ex: server.js)
module.exports = authRouter
