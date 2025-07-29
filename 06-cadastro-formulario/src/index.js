const express = require('express')  //  importando o módulo express 
const path = require('node:path') //importando o módulo  path
const app = express() // criando a aplicação com express que será configurada

app.set('view engine', 'ejs')   //  configura  o express para usar o EJS como motor de visualização
app.set('views', path.join(__dirname, 'views')) // diz ao express que os arquivos de visualização estão na pasta views, que está dentro da pasta do projeto

app.use(express.urlencoded({ extended: true }))

let emails = []

app.get('/', (req, res) => {
    res.render('index')
})

app.post('/signup', (req, res) => {
let { email } = req.body

if (email) {
    emails.push(email)
    res.redirect('/success')
} else {
    res.redirect('/')
}
})

app.get('/success', (req, res) => {
    res.render('success')
})

app.get('/emails', (req, res) => {
    res.render('emails', { emails: emails})
})

app.post('/emails/delete', (req, res) => {
    const { email } = req.body
    emails = emails.filter(item => item !== email)
    res.redirect('/emails')
})

const  PORT = 3000 // criação da porta onde o servidor express vai rodar
app.listen(PORT, () => console.log(`Servidor iniciado!`)) // começa a escutar na porta 3000 e quando estiver tudo pronto, aparece a msg no  terminal
