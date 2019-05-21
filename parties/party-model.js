const knex = require('knex')

const config = require('../knexfile.js')
const db = knex(config.development)




module.exports = {
    add,
    update,
    remove,
    findById,
    getParties,
    addShop,
    addTodo
    
  }
  
// Find

function getParties() {
    return db('party')
  }
  
  function findBy(filter) {
    return db('party').where(filter)
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

// Add

async function add(party) {
    const [id] = await db('party').insert(party)

    return findById(id)
}

async function addTodo(todo) {
    const [id] = await db('todo_list').insert(todo).where({ id: todo.party_id })
  console.log(id)
    return findById(id)
}

async function addShop(shop) {
  const [id] = await db('shopping_list').insert(shop).where({ id: shop.party_id })

  return findById(id)
}

// Edit

function update(id, changes) {
  console.log(changes)
  return db('party')
    .where({ id })
    .update(changes)
}

// Delete

function remove(id) {
  return db('party')
    .where({ id })
    .del()
}