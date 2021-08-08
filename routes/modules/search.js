
const express = require('express')
const router = express.Router()
const Restaurant = require('../../models/restaurant')

router.get("/", (req, res) => {
  const keyword = req.query.keyword.toLowerCase()
  Restaurant.find({ name: { $regex: `${keyword}`, $options: "i" } })
    .lean()
    .then(restaurants => res.render("index", { restaurants }))
    .catch(error => console.log(error))
})


module.exports = router