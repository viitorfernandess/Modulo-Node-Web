const express = require('express')
const path = require('node:path')

const app = express()

storedUsers = []

//Configuração do EJS
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//Configuração do body
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    const title = 'Homepage'
    const message = 'Mensagem dinâmica inserida pelo EJS'
    res.render('index', { title, message})
})

app.get('/formulario', (req, res) => {
    res.render('form')
})

app.post('/register', (req, res) => {
    const username = req.body.username
    

    res.send()
})

const PORT = 3000
app.listen(PORT, () => console.log('Servidor iniciado!'))