import { Test, TestingModule } from '@nestjs/testing';
import { RuleController } from './rule.controller';
import { RuleService } from './rule.service';
import { RuleModule } from './rule.module';
import { INestApplication } from '@nestjs/common';
import { RuleRepository } from './rule.repository';

const request = require('supertest')

describe('RuleController', () => {
  let controller: RuleController;
  let repository: RuleRepository
  let app: INestApplication;
  const rule = {
    title: "Просмотр задач",
    description: "Пользователь может просматривать информацию о задачах",
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RuleController],
      providers: [RuleService, RuleRepository],
    }).compile();

    controller = module.get<RuleController>(RuleController);
    repository = module.get<RuleRepository>(RuleRepository)
  });

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [RuleModule],
    }).compile();
  
    app = moduleRef.createNestApplication();
    await app.init();
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  test("It should response rule list after GET", async () => {
    const response = await request(app.getHttpServer()).get("/rule");
    expect(response.statusCode).toBe(200);
  });

  test("It should response rule Detail, using Id, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/rule/0");
    expect(response.statusCode).toBe(200);
  });

  test("It should send 404 status, after GET", async () => {
    const response = await request(app.getHttpServer()).get("/rule/3");
    expect(response.statusCode).toBe(404);
  });

  test("It should response body of request, after POST", async () => {
    const response = await request(app.getHttpServer()).post("/rule").send(rule);
    expect(response.statusCode).toBe(201);
    expect(response.body).toEqual({id: repository.rules.length, ...rule});
  });

  test("It should response body of request, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/rule/0").send(rule);
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual(repository.rules[0]);
  });

  test("It should send 404 status, after PATCH", async () => {
    const response = await request(app.getHttpServer()).patch("/rule/5").send(rule);
    expect(response.statusCode).toBe(404);
  });

  test("It should response rule object, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/rule/0");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({id: 0, ...rule});
  });

  test("It should send 404 status, after DELETE", async () => {
    const response = await request(app.getHttpServer()).delete("/rule/5");
    expect(response.statusCode).toBe(404);
  });
});
