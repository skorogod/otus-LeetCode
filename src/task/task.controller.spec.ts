import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';
import { TaskModule } from './task.module';
import { INestApplication } from '@nestjs/common';
import { TaskRepository } from './task.repository';

const request = require('supertest')

describe('TaskController', () => {
  let controller: TaskController;
  let repository: TaskRepository
  let app: INestApplication;

  const task = {
    title: "Сортировка массива",
    description: "Отсортируйте массив [2,4,1,6]",
    tags: ["Массив", "сортировка"],
    links: ["testlink.com"],
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [TaskService, TaskRepository],
    }).compile();

    controller = module.get<TaskController>(TaskController);
    repository = module.get<TaskRepository>(TaskRepository)
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [TaskModule],
    }).compile();
  
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test("It should response task list after GET", async () => {
    const response = await request(app.getHttpServer()).get("/task");
    expect(response.statusCode).toBe(200);
  });

  test("It should response task Detail, using Id, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/task/0");
    expect(response.statusCode).toBe(200);
  });

  test("It should send 404 status, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/task/3");
    expect(response.statusCode).toBe(404);
  });

  test("It should response body of request, after POST", async () => {
    const response = await request(app.getHttpServer()).post("/task").send(task);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({id: repository.tasks.length, ...task});
  });

  test("It should response body of request, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/task/0").send(task);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(repository.tasks[0]);
  });

  test("It should send 404 status, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/task/5").send(task);
    expect(response.statusCode).toBe(404);
  });

  test("It should response task object, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/task/0");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(repository.tasks[0]);
  });

  test("It should send 404 status, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/task/5");
    expect(response.statusCode).toBe(404);
  });
});
