import { describe } from "node:test";
import { app } from "../app";

const request = require('supertest')

import { tasks } from "../api/controllers/taskController";

const task = {
    title: "Сортировка массива",
    description: "Отсортируйте массив [2,4,1,6]",
    level: 0,
    tags: ["Массив", "сортировка"],
    links: ["testlink.com"]
}

describe("test tasks routes", () => {
    test("It should response task list after GET", async () => {
        const response = await request(app).get('/tasks');
        expect(response.statusCode).toBe(200)
    })

    test("It should response task Detail, using Id, after GET", async () => {
        const response = await request(app).get('/tasks/0');
        expect(response.statusCode).toBe(200)
    })

    test("It should send 404 status, after GET", async () => {
        const response = await request(app).get('/tasks/3');
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after POST", async () => {
        const response = await request(app)
                                .post("/tasks")
                                .send(task)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(task)
    })

    test("It should response body of request, after PATCH", async () => {
        const response = await request(app)
                                .patch("/tasks/0")
                                .send(task)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(task)
    })

    test("It should send 404 status, after PATCH", async () => {
        const response = await request(app)
                                .patch("/tasks/3")
                                .send(task)
        expect(response.statusCode).toBe(404)
    })

    test("It should response body of request, after PUT", async () => {
        const response = await request(app)
                                .put("/tasks/0")
                                .send(task)
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual(task)
    })

    test("It should send 404 status, after PUT", async () => {
        const response = await request(app)
                                .put("/tasks/3")
                                .send(task)
        expect(response.statusCode).toBe(404)
    })

    test("It should response task object, after DELETE", async () => {
        const response = await request(app).delete("/tasks/0")
        expect(response.statusCode).toBe(200);
        expect(response.body).toEqual(tasks[0])
    })

    test("It should send 404 status, after DELETE", async () => {
        const response = await request(app).delete('/tasks/3')
        expect(response.statusCode).toBe(404)
    })
    
})