// Importa o módulo HTTP do Node.js
const http = require('node:http')

// Cria o servidor HTTP e define a função para lidar com as requisições
const server = http.createServer((request, response) => {
    // Imprime no console o objeto da requisição recebida
    console.log(request)

    // Define o status da resposta HTTP como 200 (OK)
    response.writeHead(200)

    // Envia o corpo da resposta com uma mensagem simples
    response.write('Servidor HTTP em Node.js funcionando!')

    // Finaliza a resposta (obrigatório para indicar que a resposta está completa)
    response.end()
})

const PORT = (3000)

server.listen(PORT, () => {
console.log(`Servidor rodando em http://localhost:${PORT}/`)
})