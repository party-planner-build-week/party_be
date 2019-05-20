
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('party').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('party').insert([
        {guests_num: 7, theme: 'bears', date: 6/10/2019, budget: 540, completed: false, moodboard_theme: 'office', user_id: 1},
        {guests_num: 6, theme: 'beets', date: 6/10/2019, budget: 540, completed: false, moodboard_theme: 'office', user_id: 2},
        {guests_num: 5, theme: 'battlestar galactica', date: 6/10/2019, budget: 540, completed: false, moodboard_theme: 'office', user_id: 3},
        {guests_num: 8, theme: 'alpha male', date: 6/10/2019, budget: 540, completed: false, moodboard_theme: 'office', user_id: 4},
        {guests_num: 4, theme: 'jackhammer', date: 6/10/2019, budget: 540, completed: false, moodboard_theme: 'office', user_id: 5},
        {guests_num: 2, theme: 'insatiable', date: 6/10/2019, budget: 540, completed: false, moodboard_theme: 'office', user_id: 6},
        {guests_num: 3, theme: 'merciless', date: 6/10/2019, budget: 540, completed: false, moodboard_theme: 'office', user_id: 7}
      ]);
    });
};
