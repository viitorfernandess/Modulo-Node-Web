module.exports = {
    dashboard: (req, res) => {
        if (!req.session.authenticated) {
            console.log('tentativa de caessar o dashboard bloqueada')
            return res.redirect('/')
        }
        console.log(req.session.authenticated)
        console.log(req.session.currentUser)
        res.render('dashboard', { user: req.session.currentUser })
    }
}