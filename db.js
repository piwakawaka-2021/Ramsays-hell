const knex = requre('knex')
const config = require('./knexfile')
const env = process.env.NODE_ENV || 'development'
const connection = knex(config[env])

function getAllDishes (db = connection) {
    return db('dishes')
    .select()
    .catch((err) => {
        console.log(err.message)
    })
}

function getDish (id, db = connection) {
    return db('dishes')
    .where('id', id)
    .select()
    .first()
    .catch((err) => {
        console.log(err.message)
    })

}


module.exports = {
    getAllDishes: getAllDishes,
    getAllDishes: getDish,
    
}