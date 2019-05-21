
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo_list').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('todo_list').insert([
        {task: 'bears', completed: false, party_id: 1},
        {task: 'beets', completed: false, party_id: 2},
        {task: 'battlestar galactica', completed: false, party_id: 3},
        {task: 'bears', completed: false, party_id: 4},
        {task: 'beets', completed: false, party_id: 5},
        {task: 'battlestar galactica', completed: false, party_id: 6},
        {task: 'dwight schrute', completed: false, party_id: 7}
      ]);
    });
};
