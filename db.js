const knex = require('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getAllDishes (db = connection) {
    return db('dish')
    .select()
    .catch((err) => {
        console.log(err.message)
    })
}

function getDish (id, db = connection) {
    return db('dish')
    .where('id', id)
    .select()
    .first()
    .catch((err) => {
        console.log(err.message)
    })

}

function getAllIngredients (db = connection) {
    return db('ingredients')
    .select()
    .orderBy('name')


}


 function getIngredientsByDishId (id, db = connection) {
    return db('ingredients')
    .join('dish_ingredients', 'ingredients.id', 'dish_ingredients.ingredient_id' )
    .where('dish_id', id)
    .select() 
    .catch((err) => {
        console.log(err.message)
    })

 }

 function getDishByTime (num, db = connection) {
     return db('dish')
     .where('time_tocook', num)
     .select()
     .first()
     .catch((err) => {
        console.log(err.message)
    })

 }

 function generateRandomNumber (min, max) {
     return Math.floor(Math.random() * (max - min) + min )
 }

 function updateRandomIngredient (id, num, db = connection) {
     return db('dish_ingredients')
     .where('dish_id', id)
     .update({ingredient_id: num})
     .catch((err) => {
        console.log(err.message)
    })

 }


 function addDish (obj, db = database) {
    return db('dish')
    .insert(obj)
    .catch((err) => {
        console.log(err.message)
    })
 }
 

module.exports = {
    getAllDishes: getAllDishes,
    getDish: getDish,
    getIngredientsByDishId: getIngredientsByDishId,
    getDishByTime: getDishByTime, 
    generateRandomNumber: generateRandomNumber,
    updateRandomIngredient: updateRandomIngredient,
    getAllIngredients: getAllIngredients,
    addDish: addDish,

}