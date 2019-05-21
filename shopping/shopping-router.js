const express = require('express')

const Shopping = require('./shopping-model.js')

const router = express.Router()

const knex = require('knex')
const config = require('../knexfile.js')
const db = knex(config.development)


// Update

router.put('/:id', async (req, res) => {
    try {
    const shopping = await Shopping.update(req.params.id, req.body)

    if (shopping) {
        res.status(200).json(shopping)
    } else {
        res.status(404).json({
            message: `Couldn't find that shopping list.`
        })
    }

    } catch (error) {
        res.status(500).json({
            message: "Error updating that shopping list."
        })
    }
})


// Delete

router.delete('/:id', async (req, res) => {
    try {
        const shopping = await Shopping.remove(req.params.id)

        if (shopping > 0) {
            res.status(200).json({
                message: 'Successfully deleted the shopping list.'
            })
        } else {
            res.status(404).json({
                message: 'The shopping list could not be found'
            })
        }

    } catch (error) {
        res.status(500).json({
            message: `Error removing the shopping list.`
        })
    }
})