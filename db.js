const knex = requre('knex')
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
     return('dish')
     .where('time_tocook', num)
     .select()
     .catch((err) => {
        console.log(err.message)
    })

 }
 

module.exports = {
    getAllDishes: getAllDishes,
    getAllDishes: getDish,
    getIngredientsByDishId: getIngredientsByDishId,
    getDishByTime: getDishByTime, 

}