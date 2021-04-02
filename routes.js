
const express = require("express")
const router = express.Router()
router.use(express.urlencoded({ extended: true }))



const db = require('./db')

// const router = express.Router()

router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  return db.getAllDishes()
    .then(dishes => {
      res.render('index', {dishes: dishes })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/ingredients/:id', (req, res) => {
  const id=Number(req.params.id)
  return db.getDish(id)
  .then(dish => {
    console.log(profile)
    res.render('dish', {dish: dish})
  })
})

router.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css')
})

module.exports = router
