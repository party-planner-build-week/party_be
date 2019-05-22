// Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

// Routers
const authRouter = require('../auth/auth-router.js')
const partyRouter = require('../parties/party-router.js')
const todoRouter = require('../todo/todo-router.js')
const shoppingRouter = require('../shopping/shopping-router.js')


// Middleware
const isLoggedIn = require('../auth/restricted-middleware.js')


// Server 
const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`Server's working!`)
})

// Routes
server.use('/api/parties', partyRouter)
server.use('/api/parties/todo', todoRouter)
server.use('/api/parties/shopping', hoppingRouter)
server.use('/api/auth', authRouter)

module.exports = server;