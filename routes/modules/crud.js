const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


//新增餐廳頁面路由
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post("/new", (req, res) => {
  const newRestaurant = req.body
  Restaurant.create(newRestaurant)
    .then(() => res.redirect("/"))
    .catch(error => console.log(error))
})




module.exports = router