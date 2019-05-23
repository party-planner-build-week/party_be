const knex = require('knex')

const knexConfig = require('../knexfile.js')

const dbEnv = "testing" || 'development'



module.exports = knex(knexConfig.development)