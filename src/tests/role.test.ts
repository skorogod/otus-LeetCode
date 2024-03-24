import { describe } from "node:test";
import { app } from "../app";

const request = require('supertest')

import { roles } from "../api/controllers/roleController";

const role = {
    title: 'Подьзователь',
    description: 'Пользователь со стандартными правами',
    roles: [0,1]
}

describe("test roles routes", () => {
    test("It should response role list after GET", async () => {
        const response = await request(app).get('/roles');
        expect(response.statusCode).toBe(200)
    })

    test("It should response role Detail, using Id, after GET", async () => {
        const response = await request(app).get('/roles/0');
        expect(response.statusCode).toBe(200)
    })

    test("It should send 404 status, after GET", async () => {
        const response = await request(app).get('/roles/3');
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after POST", async () => {
        const response = await request(app)
                                .post("/roles")
                                .send(role)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(role)
    })

    test("It should response body of request, after PATCH", async () => {
        const response = await request(app)
                                .patch("/roles/0")
                                .send(role)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(role)
    })

    test("It should send 404 status, after PATCH", async () => {
        const response = await request(app)
                                .patch("/roles/3")
                                .send(role)
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after PUT", async () => {
        const response = await request(app)
                                .put("/roles/0")
                                .send(role)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(role)
    })

    test("It should send 404 status, after PUT", async () => {
        const response = await request(app)
                                .put("/roles/3")
                                .send(role)
        expect(response.statusCode).toBe(404)
    })

    test("It should response role object, after DELETE", async () => {
        const response = await request(app).delete("/roles/0")
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(roles[0])
    })

    test("It should send 404 status, after DELETE", async () => {
        const response = await request(app).delete('/roles/3')
        expect(response.statusCode).toBe(404)
    })
    
})