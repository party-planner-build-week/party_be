const express = require('express')

const Todo = require('./todo-model.js')

const router = express.Router()

const knex = require('knex')
const config = require('../knexfile.js')
const db = knex(config.development)

router.put('/parties/todo/:id', async (req, res) => {

    try {

    } catch (error) {
        res.status(500).json({
            message: `Error updating that todo list`
        })
    }
})
router.delete('/parties/:param1/todo/:param2', async (req, res) => {

    try {

    } catch (error) {

    }
})