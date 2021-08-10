const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const search = require('./modules/search')
const crud = require('./modules/crud')
const users = require('./modules/users')
const { authenticator } = require('../middleware/auth')


router.use('/search', authenticator, search)
router.use('/restaurants', authenticator, crud)
router.use('/users', users)
router.use('/', authenticator, home)

module.exports = router