
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dish_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish_ingredients').insert([
        {id: 1, dish_id: 8001, ingredient_id: 9001 },
        {id: 2, dish_id: 8001, ingredient_id: 9002 },
        {id: 3, dish_id: 8001, ingredient_id: 9003 }
      ]);
    });
};
