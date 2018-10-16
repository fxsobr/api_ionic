import 'jest'
import * as request from 'supertest'

test('get /users', ()=>{
    return request('http://localhost:3000')
        .get('/users')
        .then(response=>{
           expect(response.status).toBe(200)
           expect(response.body.items).toBeInstanceOf(Array)
        }).catch(fail)
})

test('post /users', ()=>{
    return request('http://localhost:3000')
        .post('/users')
        .send({
            name: 'usuario1',
            email: 'usuario1@email.com',
            password: '123456'
        })
        .then(response=>{
            expect(response.status).toBe(200)
            expect(response.body._id).toBeDefined()
            expect(response.body.name).toBe('Teste JEST')
            expect(response.body.email).toBe('testejest@jest.com')
            expect(response.body.password).toBeUndefined()
        }).catch(fail)
})