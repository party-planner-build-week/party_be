const server = require('./api/server.js')

const port = process.env.PORT || 42069

server.listen(port, () => {
    console.log(`\nServer running on port ${port}`)
})