const express = require('express')
const router = express.Router()
const controller = require('../controllers/helper_controller')

//signup
router.post('/signup', controller.signup)

//login
router.post('/login', controller.login)


module.exports = router