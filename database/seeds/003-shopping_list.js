
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('shopping_list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('shopping_list').insert([
        {item: 'honey', price: 50, purchased: false, party_id: 1},
        {item: 'donuts', price: 50, purchased: false, party_id: 1},
        {item: 'dirt', price: 50, purchased: false, party_id: 2},
        {item: 'water', price: 50, purchased: false, party_id: 2},
        {item: 'tv', price: 50, purchased: false, party_id: 3},
        {item: 'spacesuit', price: 50, purchased: false, party_id: 3},
        {item: 'dwight', price: 50, purchased: false, party_id: 4},
        {item: 'schrute', price: 50, purchased: false, party_id: 4},
        {item: 'dwight', price: 50, purchased: false, party_id: 5},
        {item: 'schrute', price: 50, purchased: false, party_id: 5},
        {item: 'dwight', price: 50, purchased: false, party_id: 6},
        {item: 'schrute', price: 50, purchased: false, party_id: 6},
        {item: 'dwight', price: 50, purchased: false, party_id: 7},
        {item: 'schrute', price: 50, purchased: false, party_id: 7}  
      ]);
    });
};
