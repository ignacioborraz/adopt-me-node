const request = require('supertest')

const app = require('../app')

describe('GET /pets', ()=>{
    test('should respond with a 200 status code', async ()=> {
        const response = await request(app).get('/pets').send()
        expect(response.status).toBe(200)
    })
})

describe('GET /pets/{id}', ()=>{
    test('should respond with a 200 status code', async ()=> {
        let id = 1
        const response = await request(app).get(`/pets/${id}`).send()
        expect(response.status).toBe(200)
    })
})

describe('POST /pets', ()=>{
    test('should respond with a 201 status code', async ()=> {
        let newPet = {name: "clow", tag: "cat"}
        const response = await request(app).post('/pets').send(newPet)
        expect(response.status).toBe(201)
    })
})