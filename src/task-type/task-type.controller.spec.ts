import { Test, TestingModule } from '@nestjs/testing';
import { TaskTypeController } from './task-type.controller';
import { TaskTypeService } from './task-type.service';
import { TaskTypeModule } from './task-type.module';
import { INestApplication } from '@nestjs/common';
import { TaskTypeRepository } from './task-type.repository';

const request = require('supertest')

describe('TaskTypeController', () => {
  let controller: TaskTypeController;
  let repository: TaskTypeRepository
  let app: INestApplication;
  const taskType = {
    title: "Сортировка массива",
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskTypeController],
      providers: [TaskTypeService, TaskTypeRepository],
    }).compile();

    controller = module.get<TaskTypeController>(TaskTypeController);
    repository = module.get<TaskTypeRepository>(TaskTypeRepository)
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TaskTypeModule],
    }).compile();
  
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test("It should response taskType list after GET", async () => {
    const response = await request(app.getHttpServer()).get("/task-type");
    expect(response.statusCode).toBe(200);
  });

  test("It should response taskType Detail, using Id, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/task-type/0");
    expect(response.statusCode).toBe(200);
  });

  test("It should send 404 status, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/task-type/3");
    expect(response.statusCode).toBe(404);
  });

  test("It should response body of request, after POST", async () => {
    const response = await request(app.getHttpServer()).post("/task-type").send(taskType);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({id: repository.taskTypes.length, ...taskType});
  });

  test("It should response body of request, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/task-type/0").send(taskType);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(repository.taskTypes[0]);
  });

  test("It should send 404 status, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/task-type/5").send(taskType);
    expect(response.statusCode).toBe(404);
  });

  test("It should response taskType object, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/task-type/0");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({id: 0, ...taskType});
  });

  test("It should send 404 status, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/task-type/5");
    expect(response.statusCode).toBe(404);
  });
});
