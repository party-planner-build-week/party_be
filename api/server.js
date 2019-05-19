// Imports
const express = require('express');
const helmet = require('helmet');
const cors = require('cors

// Routers




// Server 
const server = express()

server.use(helmet())
server.use(express.json())
server.use(cors())

server.get('/', (req, res) => {
    res.send(`Server's working!`)
})

server.use('/')

module.exports = server;