const express = require('express')

const Parties = require('./party-model.js')

const router = express.Router()

const knex = require('knex')
const config = require('../knexfile.js')
const db = knex(config.development)


// Post Requests
// works
router.post('/', async (req, res) => {
    try {
        const parties = await Parties.add(req.body)
        res.status(200).json(parties)
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: `Couldn't add that party.`
        })
    }
})

// works
router.post('/:id/todo', async (req, res) => {
    const todoInfo = { ...req.body, party_id: req.params.id }

    try {
        const todo = await Parties.addTodo(todoInfo);
        res.status(200).json(todo)
    } catch (error) {
        console.log(error.message)
        
        res.status(500).json({
            message: `Couldn't add that todo list.`
        })
    }
})

// works
router.post('/:id/shopping', async (req, res) => {
    const shoppingInfo = { ...req.body, party_id: req.params.id}

    try {
        const shop = await Parties.addShop(shoppingInfo)
        res.status(200).json(shop)
    } catch (error) {
        res.status(500).json({
            message: `Couldn't add that shopping list.`
        })
    }
})

// Get Requests
// works
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


router.get('/:id', async (req, res) => {
    try {
        const parties = await Parties.findById(req.params.id)
        res.status(200).json(parties)
    } catch (error) {
        res.status(500).json({
            message: `Couldn't find that party.`
        })
    }
})


// Put Requests
// works
router.put('/:id', async (req, res) => {
    try {

            const party = await Parties.update(req.params.id, req.body)
            if (party) {
                res.status(200).json(party)

            } else {
                res.status(404).json({
                    message: `Couldn't find that party.`
                })

            }

        
    } catch (error) {
        console.log(error.message)
        res.status(500).json({
            message: "Error updating the party"
        })
    }
})





// Delete Requests
// works
router.delete('/:id', async (req, res) => {
    try {
        const party = await Parties.remove(req.params.id);
        if (party > 0) {
            res.status(200).json({ 
                message: 'Successfully deleted the party.'
            })
        } else {
            res.status(404).json({
                message: 'The party could not be found.'
            })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: `Error removing the party.`
        })
    }
})



 

module.exports = router;