import { describe } from "node:test";
import { app } from "../app";
import { ILevels } from "../types";

const request = require('supertest')

import { rules } from "../api/controllers/ruleController";

describe("test rules routes", () => {
    test("It should response rule list after GET", async () => {
        const response = await request(app).get('/rules');
        expect(response.statusCode).toBe(200)
    })

    test("It should response rule Detail, using Id, after GET", async () => {
        const response = await request(app).get('/rules/0');
        expect(response.statusCode).toBe(200)
    })

    test("It should send 404 status, after GET", async () => {
        const response = await request(app).get('/rules/3');
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after POST", async () => {
        const rule = {
            title: 'Просмотр задач',
            description: 'Пользователь может просматривать информацию о задачах'
        }
        const response = await request(app)
                                .post("/rules")
                                .send(rule)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(rule)
    })

    test("It should response body of request, after PATCH", async () => {
        const rule = {
            title: 'Просмотр задач',
            description: 'Пользователь может просматривать информацию о задачах'
        }
        const response = await request(app)
                                .patch("/rules/0")
                                .send(rule)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(rule)
    })

    test("It should send 404 status, after PATCH", async () => {
        const rule = {
            title: 'Просмотр задач',
            description: 'Пользователь может просматривать информацию о задачах'
        }
        const response = await request(app)
                                .patch("/rules/3")
                                .send(rule)
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after PUT", async () => {
        const rule = {
            title: 'Просмотр задач',
            description: 'Пользователь может просматривать информацию о задачах'
        }
        const response = await request(app)
                                .put("/rules/0")
                                .send(rule)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(rule)
    })

    test("It should send 404 status, after PUT", async () => {
        const rule = {
            title: 'Просмотр задач',
            description: 'Пользователь может просматривать информацию о задачах'
        }
        const response = await request(app)
                                .put("/rules/3")
                                .send(rule)
        expect(response.statusCode).toBe(404)
    })

    test("It should response rule object, after DELETE", async () => {
        const rule = {
            title: 'Просмотр задач',
            description: 'Пользователь может просматривать информацию о задачах'
        }
        const response = await request(app).delete("/rules/0")
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(rules[0])
    })

    test("It should send 404 status, after DELETE", async () => {
        const response = await request(app).delete('/rules/3')
        expect(response.statusCode).toBe(404)
    })
    
})