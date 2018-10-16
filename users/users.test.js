"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jest");
var request = require("supertest");
test('get /users', function () {
    return request('http://localhost:3000')
        .get('/users')
        .then(function (response) {
        expect(response.status).toBe(200);
        expect(response.body.items).toBeInstanceOf(Array);
    }).catch(fail);
});
test('post /users', function () {
    return request('http://localhost:3000')
        .post('/users')
        .send({
        name: 'usuario1',
        email: 'usuario1@email.com',
        password: '123456'
    })
        .then(function (response) {
        expect(response.status).toBe(200);
        expect(response.body._id).toBeDefined();
        expect(response.body.name).toBe('Teste JEST');
        expect(response.body.email).toBe('testejest@jest.com');
        expect(response.body.password).toBeUndefined();
    }).catch(fail);
});
