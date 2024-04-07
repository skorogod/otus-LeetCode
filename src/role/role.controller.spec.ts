import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';
import { RoleModule } from './role.module';
import { INestApplication } from '@nestjs/common';
import { RoleRepository } from './role.repository';

const request = require('supertest')

describe('RoleController', () => {
  let controller: RoleController;
  let repository: RoleRepository
  let app: INestApplication;
  const role = {
    title: "Пользователь",
    description: "Пользователь со стандартными правами",
    rules: [0, 1],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers: [RoleService, RoleRepository],
    }).compile();

    controller = module.get<RoleController>(RoleController);
    repository = module.get<RoleRepository>(RoleRepository)
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [RoleModule],
    }).compile();
  
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test("It should response role list after GET", async () => {
    const response = await request(app.getHttpServer()).get("/role");
    expect(response.statusCode).toBe(200);
  });

  test("It should response role Detail, using Id, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/role/0");
    expect(response.statusCode).toBe(200);
  });

  test("It should send 404 status, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/role/3");
    expect(response.statusCode).toBe(404);
  });

  test("It should response body of request, after POST", async () => {
    const response = await request(app.getHttpServer()).post("/role").send(role);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({id: repository.roles.length, ...role});
  });

  test("It should response body of request, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/role/0").send(role);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({id: 0, ...role});
  });

  test("It should send 404 status, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/role/5").send(role);
    expect(response.statusCode).toBe(404);
  });

  test("It should response role object, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/role/0");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({id: 0, ...role});
  });

  test("It should send 404 status, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/role/5");
    expect(response.statusCode).toBe(404);
  });
});
