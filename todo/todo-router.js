const express = require('express')

const Todo = require('./todo-model.js')

const router = express.Router()

const knex = require('knex')
const config = require('../knexfile.js')
const db = knex(config.development)

// Edit

router.put('/:id', async (req, res) => {

    try {

        const todo = await Todo.update(req.params.id, req.body)

        if (shopping) {
            res.status(200).json(todo)
        } else {
            res.status(404).json({
                message: `Couldn't find that todo list`
            })
        }
    } catch (error) {
        res.status(500).json({
            message: `Error updating that todo list`
        })
    }
})

// Delete

router.delete('/:id', async (req, res) => {
    try {
        const todo = await Shopping.remove(req.params.id)

        if (todo > 0) {
            res.status(200).json({
                message: 'Successfully deleted the todo list.'
            })
        } else {
            res.status(404).json({
                message: 'The todo list could not be found.'
            })
        }

    } catch (error) {
        res.status(500).json({
            message: `Error removing the todo list.`
        })
    }
})

module.exports = router