const bcrypt = require('bcryptjs')



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {username: 'ben', password: bcrypt.hashSync('password', 10)},
        {username: 'alyssa', password: bcrypt.hashSync('password', 10)},
        {username: 'taslim', password: bcrypt.hashSync('password', 10)},
        {username: 'michael', password: bcrypt.hashSync('password', 10)},
        {username: 'trevor', password: bcrypt.hashSync('password', 10)},
        {username: 'anu', password: bcrypt.hashSync('password', 10)},
        {username: 'john', password: bcrypt.hashSync('password', 10)}
      ]);
    });
};
