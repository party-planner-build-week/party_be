const express = require('express')

const Parties = require('./party-model.js')

const router = express.Router()

const knex = require('knex')
const config = require('../knexfile.js')
const db = knex(config.development)

router.get('/', async (req, res) => {
    try {
        const parties = await Parties.getParties()
        const shopping = await db('shopping_list')
        const todo = await db('todo_list')
        res.status(200).json(parties)
    } catch (error) {
        res.status(500).json({
            message: `Couldn't retrieve the parties.`
        })
    }
})