const bcrypt = require('bcryptjs')



exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('user').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {username: 'ben', password: bcrypt.hashSync('password', 10), name: 'Wizard', email: 'ben@legend47.com', },
        {username: 'alyssa', password: bcrypt.hashSync('password', 10), name: 'Alyssa', email: 'alyssa123151234@gmail.com'},
        {username: 'taslim', password: bcrypt.hashSync('password', 10), name: 'Taslim', email: 'tas@42069.com'},
        {username: 'michael', password: bcrypt.hashSync('password', 10), name: 'Michael', email: 'mike@rotch.com'},
        {username: 'trevor', password: bcrypt.hashSync('password', 10), name: 'Trevor', email: 'trevor@teamlead.jp'},
        {username: 'anu', password: bcrypt.hashSync('password', 10), name: 'Anu', email: 'anu@thisisafakeemail.com'}
      ]);
    });
};
