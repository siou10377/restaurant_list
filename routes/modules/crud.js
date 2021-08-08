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

// 設定 show 頁面路由
router.get('/:id', (req, res) => {
  const id = req.params.id
  return Restaurant.findById(id)
    .lean()
    .then(restaurants => res.render('show', { restaurants }))
    .catch(error => console.log(error))
})



module.exports = router