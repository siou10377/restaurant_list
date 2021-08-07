const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')

const exphbs = require('express-handlebars')
const restaurantLists = require('./restaurant.json')


app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')

  app.get('/', (req, res) => {
    res.render('index', { restaurants: restaurantLists.results })
  })

  app.get('/restaurants/:restaurant_id', (req, res) => {
    const restaurant = restaurantLists.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
    res.render('show', { restaurant: restaurant })
  })

  app.get('/search', (req, res) => {
    const keyword = req.query.keyword
    const restaurants = restaurantLists.results.filter(restaurant => {
      return restaurant.name.toLowerCase().includes(keyword.toLowerCase())
    })
    res.render('index', { restaurants: restaurants, keyword: keyword })
  })


  app.listen(port, () => {
    console.log(` Express is listening on localhost:${port}`)
  })