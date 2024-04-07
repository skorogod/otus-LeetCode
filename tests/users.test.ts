// import { describe } from "node:test";
// import { app } from "../src/app";

// const request = require("supertest");

// import { users } from "../src/api/controllers/userController";

// const user = {
//   email: "test@mail.ru",
//   password: "qwertyvbnm",
//   username: "user123",
//   role: 0,
// };

// describe("test users routes", () => {
//   test("It should response user list after GET", async () => {
//     const response = await request(app).get("/users");
//     expect(response.statusCode).toBe(200);
//   });

//   test("It should response user Detail, using Id, after GET", async () => {
//     const response = await request(app).get("/users/0");
//     expect(response.statusCode).toBe(200);
//   });

//   test("It should send 404 status, after GET", async () => {
//     const response = await request(app).get("/users/3");
//     expect(response.statusCode).toBe(404);
//   });

//   test("It should response body of request, after POST", async () => {
//     const response = await request(app).post("/users").send(user);
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toEqual(user);
//   });

//   test("It should response body of request, after PATCH", async () => {
//     const response = await request(app).patch("/users/0").send(user);
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toEqual(user);
//   });

//   test("It should send 404 status, after PATCH", async () => {
//     const response = await request(app).patch("/users/3").send(user);
//     expect(response.statusCode).toBe(404);
//   });

//   test("It should response body of request, after PUT", async () => {
//     const response = await request(app).put("/users/0").send(user);
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toEqual(user);
//   });

//   test("It should send 404 status, after PUT", async () => {
//     const response = await request(app).put("/users/3").send(user);
//     expect(response.statusCode).toBe(404);
//   });

//   test("It should response user object, after DELETE", async () => {
//     const response = await request(app).delete("/users/0");
//     expect(response.statusCode).toBe(200);
//     expect(response.body).toEqual(users[0]);
//   });

//   test("It should send 404 status, after DELETE", async () => {
//     const response = await request(app).delete("/users/3");
//     expect(response.statusCode).toBe(404);
//   });
// });
