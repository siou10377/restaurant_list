const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const restaurantLists = require('./restaurant.json')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantLists.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantLists.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})




app.listen(port, () => {
  console.log(` Express is listening on localhost:${port}`)
})