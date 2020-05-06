const express = require('express')
const route = express.Router()

const AuthController = require('../controller/AuthController')

router.post('/register' ,AuthController.register)

module.exports = router