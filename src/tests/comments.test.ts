import { describe } from "node:test";
import { app } from "../app";

const request = require('supertest')

import { comments } from "../api/controllers/commentController";

const comment = {
    date: '2024-03-23T10:04:02',
    text: 'Интересно',
    task: 0,
    user: 0
}

describe("test comments routes", () => {
    test("It should response comment list after GET", async () => {
        const response = await request(app).get('/comments');
        expect(response.statusCode).toBe(200)
    })

    test("It should response comment Detail, using Id, after GET", async () => {
        const response = await request(app).get('/comments/0');
        expect(response.statusCode).toBe(200)
    })

    test("It should send 404 status, after GET", async () => {
        const response = await request(app).get('/comments/3');
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after POST", async () => {
        const response = await request(app)
                                .post("/comments")
                                .send(comment)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(comment)
    })

    test("It should response body of request, after PATCH", async () => {
        const response = await request(app)
                                .patch("/comments/0")
                                .send(comment)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(comment)
    })

    test("It should send 404 status, after PATCH", async () => {
        const response = await request(app)
                                .patch("/comments/3")
                                .send(comment)
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after PUT", async () => {
        const response = await request(app)
                                .put("/comments/0")
                                .send(comment)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(comment)
    })

    test("It should send 404 status, after PUT", async () => {
        const response = await request(app)
                                .put("/comments/3")
                                .send(comment)
        expect(response.statusCode).toBe(404)
    })

    test("It should response comment object, after DELETE", async () => {
        const response = await request(app).delete("/comments/0")
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(comments[0])
    })

    test("It should send 404 status, after DELETE", async () => {
        const response = await request(app).delete('/comments/3')
        expect(response.statusCode).toBe(404)
    })
    
})