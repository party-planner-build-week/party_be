const knex = require('knex')

const config = require('../knexfile.js')
const db = knex(config.development)




module.exports = {
    add,
    update,
    // delete,
    findById,
    getParties
}

function getParties() {
    return db('party')
}

function findBy(filter) {
    return db('party').where(filter)
}

async function add(party) {
    const [id] = await db('party').insert(party)

    return findById(id)
}

function update(id, changes) {
  console.log(changes)
  return db('party')
    .where({ id })
    .update(changes)
}

async function findById(id) {
    let query = await db('party').where({id}).first();

    let shopQuery = await db('shopping_list').where({ party_id: id })

    let todoQuery = await db('todo_list').where({ party_id: id })

    
   return { ...query, todo: todoQuery, shopping_list: shopQuery }

}

function getPartyShopList(partyId) {
    return db('party')
        .where('party.id', partyId)
        .then(parties => parties.map(party => mappers.shopListToBody(party)))
}