import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserModule } from './user.module';
import { INestApplication } from '@nestjs/common';
import { UserRepository } from './user.repository';

const request = require('supertest')

describe('UserController', () => {
  let controller: UserController;
  let repository: UserRepository
  let app: INestApplication;

  const user =  {
    email: "test@mail.ru",
    password: "qwertyvbnm",
    username: "user123",
    role: 0,
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService, UserRepository],
    }).compile();

    controller = module.get<UserController>(UserController);
    repository = module.get<UserRepository>(UserRepository)
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [UserModule],
    }).compile();
  
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test("It should response user list after GET", async () => {
    const response = await request(app.getHttpServer()).get("/user");
    expect(response.statusCode).toBe(200);
  });

  test("It should response user Detail, using Id, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/user/0");
    expect(response.statusCode).toBe(200);
  });

  test("It should send 404 status, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/user/3");
    expect(response.statusCode).toBe(404);
  });

  test("It should response body of request, after POST", async () => {
    const response = await request(app.getHttpServer()).post("/user").send(user);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({id: repository.users.length, ...user});
  });

  test("It should response body of request, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/user/0").send(user);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({id: 0, ...user});
  });

  test("It should send 404 status, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/user/5").send(user);
    expect(response.statusCode).toBe(404);
  });

  test("It should response user object, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/user/0");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({id: 0, ...user});
  });

  test("It should send 404 status, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/user/5");
    expect(response.statusCode).toBe(404);
  });

});
