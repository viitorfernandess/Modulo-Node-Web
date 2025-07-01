// Importa o framework Express para criar o servidor web
const express = require('express')

// Cria uma instância do aplicativo Express
const app = express()

// Define a pasta 'public' para servir arquivos estáticos (CSS, JS, imagens, etc.)
// Isso permite acessar esses arquivos diretamente via URL, por exemplo:
// http://localhost:3000/arquivo.css
app.use(express.static('public'))

// Cria uma rota para a raiz '/' do site
// Quando o usuário acessar essa URL, será enviada a página index.html que está na pasta 'views'
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html') // Envia o arquivo HTML como resposta
})

// Define a porta onde o servidor vai rodar
const PORT = 3000

// Inicializa o servidor, escutando na porta definida
// Quando o servidor estiver rodando, exibe a mensagem no console
app.listen(PORT, () => console.log('Servidor iniciado!'))
