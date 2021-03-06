const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

//render index
router.get('/', (req, res) => {
  const userId = req.user._id
  Restaurant.find({ userId })
    .lean()
    .then(restaurants => res.render('index', { restaurants }))
    .catch(error => console.log(error))
})

router.get("/search", (req, res) => {
  const keyword = new RegExp(req.query.keyword.trim(), 'i')
  Restaurant.find({ $or: [{ name: keyword }, { category: keyword }] })
    .lean()
    .then(restaurants => res.render("index", { restaurants }))
    .catch(error => console.log(error))
})



module.exports = router