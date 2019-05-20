const express = require('express')

const Parties = require('./party-model.js')

const router = express.Router()

const knex = require('knex')
const config = require('../knexfile.js')
const db = knex(config.development)

router.post('/', async (req, res) => {
    try {
        const parties = await Parties.add(req.body)
        res.status(200).json(parties)
    } catch (error) {
        res.status(500).json({
            message: `Couldn't add that party.`
        })
    }
})


router.get('/parties', async (req, res) => {
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


router.get('/parties/:id', async (req, res) => {
    try {
        const parties = await Parties.findById(req.params.id)
        res.status(200).json(parties)
    } catch (error) {
        res.status(500).json({
            message: `Couldn't find that party.`
        })
    }
})

module.exports = router;