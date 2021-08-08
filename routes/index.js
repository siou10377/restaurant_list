const express = require('express')
const router = express.Router()
const home = require('./modules/home')
const search = require('./modules/search')
const crud = require('./modules/crud')
const users = require('./modules/users')

router.use('/', home)
router.use('/search', search)
router.use('/restaurants', crud)
router.use('/users', users)

module.exports = router