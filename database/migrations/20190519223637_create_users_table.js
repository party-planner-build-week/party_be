
exports.up = function(knex, Promise) {
//     CREATE TABLE `users` (
//         `id` integer,
//         `name` string,
//         `username` string,
//         `password` string,
//         `email` string,
//         `party_id` integer,
//         PRIMARY KEY (`id`),
//         KEY `FK` (`party_id`)
//       );

    return knex.schema
        .createTable('user', tbl => {
            tbl.increments();

            tbl
                .string('name', 128)
                .notNullable()
                .unique()

            tbl
                .string('username', 128)
                .notNullable()
                .unique()

            tbl
                .string('password', 128)
                .notNullable()

            tbl
                .string('email', 128)
                .notNullable()
                .unique()

        })


//       CREATE TABLE `party` (
//         `id` integer,
//         `guests_num` integer,
//         `theme` string,
//         `date` date,
//         `budget` integer,
//         `moodboard_theme` string,
//         `picture_id` integer,
//         `shopping_list_id` integer,
//         `todo_list_id` integer,
//         PRIMARY KEY (`id`),
//         KEY `FK` (`picture_id`, `shopping_list_id`, `todo_list_id`)
//       );

        createTable('party',  tbl => {
            tbl
                .increments()

            tbl
                .integer('guests_num')
                .notNullable()
                .unsigned()
                
            tbl
                .string('theme', 256)
                .notNullable()

            tbl
                .date('date')
                .notNullable()

            tbl
                .integer('budget')
                .notNullable()
                .unsigned()

            tbl
                .string('moodboard_theme', 256)
                .notNullable()

            
        })


//       CREATE TABLE `shopping_list` (
//         `id` integer,
//         `item` string,
//         `price` integer,
//         `purchased` boolean,
//         PRIMARY KEY (`id`)
//       );

        createTable('shopping_list', tbl => {
            tbl
                .increments();
            
            tbl
                .string('item', 256)
                .notNullable()

            tbl
                .integer('price')
                .notNullable()

            tbl
                .boolean('purchased')

            tbl
                .integer('shopping_list_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('party')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
        })


//   CREATE TABLE `todo_list` (
//     `id` integer,
//     ` task` string,
//     `completed` boolean,
//     `category_id` integer,
//     PRIMARY KEY (`id`),
//     KEY `FK` (`category_id`)
//   );

        .createTable('todo_list', tbl => {
            tbl
                .increments()

            tbl
                .string('task', 128)
                .notNullable()
            
            tbl
                .boolean('completed')
        })

//       CREATE TABLE `category` (
//         `id` integer,
//         `name` string,
//         PRIMARY KEY (`id`)
//       );

        .createTable('category', tbl => {
            tbl
                .increments()

            tbl
                .string('name', 256)
                .notNullable()

            tbl
                .integer('todo_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('todo_list')
                .onDelete('RESTRICT')
                .onUpdate('CASCADE')
            })

      
//     CREATE TABLE `mood_board_pics` (
//         `id` integer,
//         `pictures_url` string,
//         PRIMARY KEY (`id`)
// KEY `FK` (M)
//     );

            // .createTable('mood_board_pics', tbl => {
            //     tbl
            //         .increments()

            //     tbl
            //         .string('pictures_url', 1000)

            //     tbl
            //         .integer
            // })


};

exports.down = function(knex, Promise) {
  
};
