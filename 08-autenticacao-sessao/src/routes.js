const express = require('express')
const dashboardController = require('./controllers/dashboard-controller')
const authController = require('./controllers/auth-controller')

const router = express.Router()

router.get('/', authController.index)
router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/dashboard', dashboardController.dashboard)

module.exports = router