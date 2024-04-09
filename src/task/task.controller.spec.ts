import { Test, TestingModule } from '@nestjs/testing';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

describe('TaskController', () => {
  let taskController: TaskController;
  let taskService: TaskService

  const taskMock = {
    id: 1,
    title: 'Сортировка массива',
    description: 'Отсортируйте массив [2,4,1,6]',
    level: { id: 0, title: 'light', tasks: [] },
    tags: ['Массив', 'сортировка'],
    links: ['testlink.com'],
  }

  const taskServiceMock = {
    create: jest.fn().mockResolvedValueOnce(taskMock),
    findAll: jest.fn().mockResolvedValueOnce([taskMock]),
    findOne: jest.fn().mockResolvedValueOnce(taskMock),
    update: jest.fn().mockResolvedValueOnce(taskMock),
    remove: jest.fn().mockResolvedValueOnce(taskMock)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaskController],
      providers: [
        {
          provide: TaskService,
          useValue: taskServiceMock
        }
      ],
    }).compile();

    taskController = module.get<TaskController>(TaskController);
    taskService = module.get<TaskService>(TaskService)
  });

  it('should be defined', () => {
    expect(taskController).toBeDefined();
  });

  test("It should get all tasks", async () => {
    expect(await taskController.findAll()).toEqual([taskMock])
  });

  test("it should create new task", async () => {
    const new_task = {
      title: 'Сортировка массива',
      description: 'Отсортируйте массив [2,4,1,6]',
      level: 0,
      taskType: 0,
      tags: ['Массив', 'сортировка'],
      links: ['testlink.com'],
    }
    const result = await taskController.create(new_task as any);
    expect(taskServiceMock.create).toHaveBeenCalled();
    expect(result).toEqual(taskMock);
  }) 

  test('it should find one task', async () => {
    const result = await taskController.findOne('1')
    expect(taskServiceMock.findOne).toHaveBeenCalledWith(1)
    expect(result).toEqual(taskMock)
  })

  test("it should update task", async () => {
    const upd_task =  {
      description: 'upd descr',
    }

    const result = await taskController.update('1', upd_task)
    expect(taskServiceMock.update).toHaveBeenCalledWith(1, {...upd_task})
    expect(result).toEqual(taskMock)
  })

  test('it should delete task', async () => {
    const result = await taskController.remove('1')
    expect(taskServiceMock.remove).toHaveBeenCalledWith(1)
    expect(result).toEqual(taskMock)
  })
 
});
