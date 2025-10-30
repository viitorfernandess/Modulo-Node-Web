const express = require('express')
const dashboardController = require('./controllers/dashboard-controller')
const authController = require('./controllers/auth-controller')

const router = express.Router()

router.get('/', authController.index)
router.post('/auth/register', authController.register)

router.get('/dashboard', dashboardController.dashboard)

module.exports = router