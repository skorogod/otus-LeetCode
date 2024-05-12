import { Test, TestingModule } from '@nestjs/testing';
import { TaskTypeController } from './task-type.controller';
import { TaskTypeService } from './task-type.service';

const request = require('supertest')

describe('TaskTypeController', () => {
  let taskTypeController: TaskTypeController;
  let taskTypeService: TaskTypeService;

  const taskTypeMock = {
    id: 1,
    title: 'Сортировка массива'
  }

  const taskTypeServiceMock = {
    create: jest.fn().mockResolvedValueOnce(taskTypeMock),
    findAll: jest.fn().mockResolvedValueOnce([taskTypeMock]),
    findOne: jest.fn().mockResolvedValueOnce(taskTypeMock),
    update: jest.fn().mockResolvedValueOnce(taskTypeMock),
    remove: jest.fn().mockResolvedValueOnce(taskTypeMock)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskTypeController],
      providers:  [{
        provide: TaskTypeService,
        useValue: taskTypeServiceMock
      }],
    }).compile();

    taskTypeService = module.get<TaskTypeService>(TaskTypeService)
    taskTypeController = module.get<TaskTypeController>(TaskTypeController);
  });

  it('should be defined', () => {
    expect(taskTypeController).toBeDefined();
  });

  test("It should get all taskTypes", async () => {
    expect(await taskTypeController.findAll()).toEqual([taskTypeMock])
  });

  test("it should create new taskType", async () => {
    const new_taskType = {
      'title': 'функции'
    }
    const result = await taskTypeController.create(new_taskType as any);
    expect(taskTypeServiceMock.create).toHaveBeenCalled();
    expect(result).toEqual(taskTypeMock);
  }) 

  test('it should find one taskType', async () => {
    const result = await taskTypeController.findOne('1')
    expect(taskTypeServiceMock.findOne).toHaveBeenCalledWith(1)
    expect(result).toEqual(taskTypeMock)
  })

  test("it should update taskType", async () => {
    const upd_taskType =  {
      title: 'title',
    }

    const result = await taskTypeController.update('1', upd_taskType)
    expect(taskTypeServiceMock.update).toHaveBeenCalledWith(1, {...upd_taskType})
    expect(result).toEqual(taskTypeMock)
  })

  test('it should delete taskType', async () => {
    const result = await taskTypeController.remove('1')
    expect(taskTypeServiceMock.remove).toHaveBeenCalledWith(1)
    expect(result).toEqual(taskTypeMock)
  })

});
