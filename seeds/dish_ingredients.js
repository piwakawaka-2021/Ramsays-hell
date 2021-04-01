
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dish_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish_ingredients').insert([
        {id: 1, dish_id: 8001, ingredient_id: 9002 },
        {id: 2, dish_id: 8001, ingredient_id: 9004 },
        {id: 3, dish_id: 8001, ingredient_id: 9005 },
        {id: 4, dish_id: 8001, ingredient_id: 9006 },
        {id: 5, dish_id: 8001, ingredient_id: 9008 },
        {id: 6, dish_id: 8001, ingredient_id: 9011 },

        {id: 7, dish_id: 8002, ingredient_id: 9001 },
        {id: 8, dish_id: 8002, ingredient_id: 9004 },
        {id: 9, dish_id: 8002, ingredient_id: 9007 },
        {id: 10, dish_id: 8002, ingredient_id: 9012 },

        {id: 11, dish_id: 8003, ingredient_id: 9003 },
        {id: 12, dish_id: 8003, ingredient_id: 9004 },
        {id: 13, dish_id: 8003, ingredient_id: 9005 },
        {id: 14, dish_id: 8003, ingredient_id: 9008 },
        {id: 15, dish_id: 8003, ingredient_id: 9012 },

        {id: 16, dish_id: 8004, ingredient_id: 9012 },
        {id: 17, dish_id: 8004, ingredient_id: 9005 },
        {id: 18, dish_id: 8004, ingredient_id: 9009 },
        {id: 19, dish_id: 8004, ingredient_id: 9004 },
        {id: 20, dish_id: 8004, ingredient_id: 9013 },

        {id: 21, dish_id: 8005, ingredient_id: 9014 },
        {id: 22, dish_id: 8005, ingredient_id: 9004 },
        {id: 23, dish_id: 8005, ingredient_id: 9005 },
        {id: 24, dish_id: 8005, ingredient_id: 9011 },



      ]);
    });
};
