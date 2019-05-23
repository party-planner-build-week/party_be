const request = require('supertest')

const server = require('./server.js')


describe('server.js', () => {
    it('should return Servers working!', async () => {
        let response = await request(server).get('/')
        console.log(response)

        expect(response.status).toBe(200)
    })
})