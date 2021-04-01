
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 8001, name: 'Vegetable Vegan Curry', time_tocook: 30},
        {id: 8002, name: 'Chicken Parmigiana', time_tocook: 60},
        {id: 8003, name: 'Spaghetti Bolognese', time_tocook: 30},
        {id: 8004, name: 'Burger', time_tocook: 20},
        {id: 8005, name: 'Salad', time_tocook: 10}
      ]);
    });
};
