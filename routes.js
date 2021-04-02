
const express = require("express")
const router = express.Router()
router.use(express.urlencoded({ extended: true }))



const db = require('./db')

// const router = express.Router()

router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
  return db.getAllDishes()
    .then(dish => {
      console.log(dish);
      res.render('index', {dish: dish})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/ingredients/:id', (req, res) => {
  const id=Number(req.params.id)
  return db.getDish(id)
  .then(dish => {
    console.log("DISH:  " + dish)
    res.render('dish', {dish: dish})
  })
})

router.get('/style.css', (req, res) => {
  res.sendFile(__dirname + '/public/style.css')
})

module.exports = router
