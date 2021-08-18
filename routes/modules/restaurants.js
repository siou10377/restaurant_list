const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')


//新增餐廳頁面路由
router.get('/new', (req, res) => {
  return res.render('new')
})

router.post("/new", (req, res) => {
  const userId = req.user._id
  const { name, name_en, category, location, phone, description, image, rating, google_map } = req.body
  Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description, userId })
    .then(() => res.redirect("/"))
    .catch(error => console.log(error))
})

// 設定 show 頁面路由
router.get('/:id', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurants => res.render('show', { restaurants }))
    .catch(error => console.log(error))
})

// 設定 edit 路由
router.get('/:id/edit', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .lean()
    .then(restaurants => res.render('edit', { restaurants }))
    .catch(error => console.log(error))
})

router.put('/:id/', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  const { name, category, image, location, phone, google_map, rating, description } = req.body
  return Restaurant.findOne({ _id, userId })
    .then((restaurants) => {
      restaurants.name = name
      restaurants.phone = phone
      restaurants.category = category
      restaurants.rating = rating
      restaurants.location = location
      restaurants.image = image
      restaurants.google_map = google_map
      restaurants.description = description
      return restaurants.save()
    })
    .then(() => res.redirect(`/restaurants/${_id}`))
    .catch(error => console.log(error))
})

// 設定 delete 路由
router.delete('/:id/', (req, res) => {
  const userId = req.user._id
  const _id = req.params.id
  return Restaurant.findOne({ _id, userId })
    .then(restaurants => {
      return restaurants.remove()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

module.exports = router