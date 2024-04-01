import { describe } from "node:test";
import { app } from "../app";

const request = require('supertest')

import { levels } from "../api/controllers/levelController";

const level = {
    title: 'Light',
}

describe("test levels routes", () => {
    test("It should response level list after GET", async () => {
        const response = await request(app).get('/levels');
        expect(response.statusCode).toBe(200)
    })

    test("It should response level Detail, using Id, after GET", async () => {
        const response = await request(app).get('/levels/0');
        expect(response.statusCode).toBe(200)
    })

    test("It should send 404 status, after GET", async () => {
        const response = await request(app).get('/levels/3');
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after POST", async () => {
        const response = await request(app)
                                .post("/levels")
                                .send(level)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(level)
    })

    test("It should response body of request, after PATCH", async () => {
        const response = await request(app)
                                .patch("/levels/0")
                                .send(level)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(level)
    })

    test("It should send 404 status, after PATCH", async () => {
        const response = await request(app)
                                .patch("/levels/3")
                                .send(level)
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after PUT", async () => {
        const response = await request(app)
                                .put("/levels/0")
                                .send(level)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(level)
    })

    test("It should send 404 status, after PUT", async () => {
        const response = await request(app)
                                .put("/levels/3")
                                .send(level)
        expect(response.statusCode).toBe(404)
    })

    test("It should response level object, after DELETE", async () => {
        const response = await request(app).delete("/levels/0")
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(levels[0])
    })

    test("It should send 404 status, after DELETE", async () => {
        const response = await request(app).delete('/levels/3')
        expect(response.statusCode).toBe(404)
    })
    
})