let users = [
    { username: 'Vitor', password: '123456' },
    { username: 'marcelo', password: '654321' }
]


module.exports = {
    // GET /
    index: (req, res) => {
        res.render('index')
    },

    // POST /auth/register
    register: (req, res) => {
        const { username, password } = req.body

        const userAlreadyExists = users.find(user => user.username === username)
        if (userAlreadyExists) {
            return res.status(400).redirect('/')
        }

        const newUser = { username, password }
        user.push(newUser)
        res.redirect('/dashboard')

    }
    // POST /auth/login

    // GET /auth/logout
}