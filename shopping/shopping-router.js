const express = require('express')

const Shopping = require('./shopping-model.js')

const router = express.Router()

const knex = require('knex')
const config = require('../knexfile.js')
const db = knex(config.development)