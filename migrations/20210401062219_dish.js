
exports.up = function(knex) {
    return knex.schema.createTable('dish', (table) => {
        table.increments('id')
        table.string('name')
        table.integer('time_tocook')
        table.string('imageURL')
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('dish')
  
};
