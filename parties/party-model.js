const knex = require('knex')

const config = require('../knexfile.js')
const db = knex(config.development)


const mappers = require('./mappers.js')

module.exports = {
    add,
    // update,
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

async function findById(id) {
    let query = await db('party').where({id}).first();

    let shopQuery = await db('shopping_list').where({ party_id: id })

    let todoQuery = await db('todo_list').where({ party_id: id })
   return { ...query, todo: todoQuery, shopping_list: shopQuery }
//   if (id) {
//     query.where('party_id', id).first();

//     const promises = [query, this.getPartyShopList(id)]; 

//     return Promise.all(promises).then(function(results) {
//       let [party, shopping_list] = results;

//       if (party) {
//         party.shopping_list = shopping_list;

//         return mappers.partyToBody(party);
//       } else {
//         return null;
//       }
//     });
// }
}

function getPartyShopList(partyId) {
    return db('party')
        .where('party.id', partyId)
        .then(parties => parties.map(party => mappers.shopListToBody(party)))
}