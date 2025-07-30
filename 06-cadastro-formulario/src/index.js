const express = require('express')  // Importa o Express
const path = require('node:path')   // Importa o módulo path
const app = express()               // Cria a aplicação Express

app.set('view engine', 'ejs')  // Define EJS como motor de visualização
app.set('views', path.join(__dirname, 'views'))  // Define a pasta onde estão as views (EJS)

app.use(express.static('public'))  // Serve arquivos estáticos (CSS, imagens, etc.)
app.use(express.urlencoded({ extended: true }))  // Habilita o recebimento de dados de formulários

let emails = []  // Lista para armazenar os e-mails

app.get('/', (req, res) => res.render('index'))  // Página inicial

app.post('/signup', (req, res) => {
    let { email } = req.body
    if (email) {
        emails.push(email)           // Adiciona e-mail à lista
        res.redirect('/success')     // Vai para a página de sucesso
    } else {
        res.redirect('/')            // Volta para o início
    }
})

app.get('/success', (req, res) => res.render('success'))  // Página de sucesso

app.get('/emails', (req, res) => res.render('emails', { emails }))  // Lista os e-mails

app.post('/emails/delete', (req, res) => {
    const { email } = req.body
    emails = emails.filter(item => item !== email)  // Remove o e-mail da lista
    res.redirect('/emails')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado!`))  // Inicia o servidor
