
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 9001, name: 'chicken'},
        {id: 9002, name: 'rice'},
        {id: 9003, name: 'spaghetti'},
        {id: 9004, name: 'tomatoes'},
        {id: 9005, name: 'onion'},
        {id: 9006, name: 'eggplant'},
        {id: 9007, name: 'bread'},
        {id: 9008, name: 'garlic'},
        {id: 9009, name: 'beef'},
        {id: 9010, name: 'wine'},
        {id: 9011, name: 'carrots'},
        {id: 9012, name: 'cheese'},
        {id: 9013, name: 'buns'},
        {id: 9014, name: 'lettuce'},
      ]);
    });
};
