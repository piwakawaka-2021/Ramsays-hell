
exports.up = function(knex) {
    return knex.schema.createTable('dish_ingredients', (table) => {
        table.increments('id')
        table.integer('dish_id')
        table.integer('ingredient_id')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('dish_ingredients')
  
};
