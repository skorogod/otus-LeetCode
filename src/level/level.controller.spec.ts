import { Test, TestingModule } from '@nestjs/testing';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';
import { LevelModule } from './level.module';
import { INestApplication } from '@nestjs/common';
import { LevelRepository } from './level.repository';

const request = require('supertest')

describe('LevelController', () => {
  let controller: LevelController;
  let repository: LevelRepository
  let app: INestApplication;

  const level = {
    title: "Легкий",
    tasks: []
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelController],
      providers: [LevelService, LevelRepository],
    }).compile();

    controller = module.get<LevelController>(LevelController);
    repository = module.get<LevelRepository>(LevelRepository)
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [LevelModule],
    }).compile();
  
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test("It should response level list after GET", async () => {
    const response = await request(app.getHttpServer()).get("/level");
    expect(response.statusCode).toBe(200);
  });

  test("It should response level Detail, using Id, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/level/0");
    expect(response.statusCode).toBe(200);
  });

  test("It should send 404 status, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/level/3");
    expect(response.statusCode).toBe(404);
  });

  test("It should response body of request, after POST", async () => {
    const response = await request(app.getHttpServer()).post("/level").send(level);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({id: repository.levels.length, ...level});
  });

  test("It should response body of request, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/level/0").send(level);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(repository.levels[0]);
  });

  test("It should send 404 status, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/level/5").send(level);
    expect(response.statusCode).toBe(404);
  });

  test("It should response level object, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/level/0");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({id: 0, ...level});
  });

  test("It should send 404 status, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/level/5");
    expect(response.statusCode).toBe(404);
  });
});
