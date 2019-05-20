const knex = require('knex')

const db = knex(config.development)

const config = require('../../knexfile.js')

const mappers = require('./mappers.js')

module.exports = {
    add,
    update,
    delete,
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

function findById(id) {
    let query = db('projects as p');

  if (id) {
    query.where('p.id', id).first();

    const promises = [query, this.getProjectActions(id)]; // [ projects, actions ]

    return Promise.all(promises).then(function(results) {
      let [project, actions] = results;

      if (project) {
        project.actions = actions;

        return mappers.projectToBody(project);
      } else {
        return null;
      }
    });
}
}

function findById(id) {
    return db('party')
        .where('party_id', partyId)
        .then(parties => parties.map(party => mappers.))
}