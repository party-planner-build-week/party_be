const knex = require('knex')

const config = require('../knexfile.js')
const db = knex(config.development)


module.exports = {
    update,
    remove

}

// Update

function update(id, changes) {
    return db('shopping_list')
        .where({ id })
        .update(changes)
}


// Delete

function remove(id) {
    return db('shopping_list')
        .where({ id })
        .del()
}