const { blockParams } = require("handlebars");

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 8001, name: 'Vegetable Vegan Curry', time_tocook: 30,  imageURL: 'veg-curry.jpg' },
        {id: 8002, name: 'Chicken Parmigiana', time_tocook: 60, imageURL: 'Chicken-Parmesam.jpg' },
        {id: 8003, name: 'Spaghetti Bolognese', time_tocook: 30, imageURL: 'spag-bol.jpg'  },
        {id: 8004, name: 'Burger', time_tocook: 20, imageURL: 'burger.jpg' },
        {id: 8005, name: 'Salad', time_tocook: 10, imageURL: 'Salad.jpg' }
      ]);
    });
};
