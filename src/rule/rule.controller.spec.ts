import { Test, TestingModule } from '@nestjs/testing';
import { RuleController } from './rule.controller';
import { RuleService } from './rule.service';

const request = require('supertest')

describe('RuleController', () => {
  let ruleController: RuleController;
  let ruleService: RuleService;

  const ruleMock =  {
    id: 1,
    title: 'Выполнение задач',
    description: 'Пользователь может выполнять задачи',
  }

  const ruleServiceMock = {
    create: jest.fn().mockResolvedValueOnce(ruleMock),
    findAll: jest.fn().mockResolvedValueOnce([ruleMock]),
    findOne: jest.fn().mockResolvedValueOnce(ruleMock),
    update: jest.fn().mockResolvedValueOnce(ruleMock),
    remove: jest.fn().mockResolvedValueOnce(ruleMock)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RuleController],
      providers:  [{
        provide: RuleService,
        useValue: ruleServiceMock
      }],
    }).compile();

    ruleService = module.get<RuleService>(RuleService)
    ruleController = module.get<RuleController>(RuleController);
  });

  it('should be defined', () => {
    expect(ruleController).toBeDefined();
  });

  test("It should get all rules", async () => {
    expect(await ruleController.findAll()).toEqual([ruleMock])
  });

  test("it should create new rule", async () => {
    const new_rule = {
      title: 'Выполнение задач',
      description: 'Пользователь может выполнять задачи',
    }
    const result = await ruleController.create(new_rule as any);
    expect(ruleServiceMock.create).toHaveBeenCalled();
    expect(result).toEqual(ruleMock);
  }) 

  test('it should find one rule', async () => {
    const result = await ruleController.findOne('1')
    expect(ruleServiceMock.findOne).toHaveBeenCalledWith(1)
    expect(result).toEqual(ruleMock)
  })

  test("it should update rule", async () => {
    const upd_rule =  {
      title: 'администрирование',
    }

    const result = await ruleController.update('1', upd_rule)
    expect(ruleServiceMock.update).toHaveBeenCalledWith(1, {...upd_rule})
    expect(result).toEqual(ruleMock)
  })

  test('it should delete rule', async () => {
    const result = await ruleController.remove('1')
    expect(ruleServiceMock.remove).toHaveBeenCalledWith(1)
    expect(result).toEqual(ruleMock)
  })

});
