const express = require('express')

// const db = require('./db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getAllDishes()
    .then(dishes => {
      return res.render('index', {dishes: dishes })
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/ingredients/:id', (req, res) => {
  const id=Number(req.params.id)
  db.getMenuById(id)
  .then(dish => {
    console.log(profile)
    return res.render('dish', {ingredients: dish})
  })
})

module.exports = router