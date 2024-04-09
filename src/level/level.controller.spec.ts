import { Test, TestingModule } from '@nestjs/testing';
import { LevelController } from './level.controller';
import { LevelService } from './level.service';

const request = require('supertest')

describe('LevelController', () => {
  let levelController: LevelController;
  let levelService: LevelService;

  const levelMock = {
    id: 1,
    title: 'Легкий',
    tasks: []
  }

  const levelServiceMock = {
    create: jest.fn().mockResolvedValueOnce(levelMock),
    findAll: jest.fn().mockResolvedValueOnce([levelMock]),
    findOne: jest.fn().mockResolvedValueOnce(levelMock),
    update: jest.fn().mockResolvedValueOnce(levelMock),
    remove: jest.fn().mockResolvedValueOnce(levelMock)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LevelController],
      providers:  [{
        provide: LevelService,
        useValue: levelServiceMock
      }],
    }).compile();

    levelService = module.get<LevelService>(LevelService)
    levelController = module.get<LevelController>(LevelController);
  });

  it('should be defined', () => {
    expect(levelController).toBeDefined();
  });

  test("It should get all levels", async () => {
    expect(await levelController.findAll()).toEqual([levelMock])
  });

  test("it should create new level", async () => {
    const new_level = {
      title: 'средний',
      tasks: []
    }
    const result = await levelController.create(new_level as any);
    expect(levelServiceMock.create).toHaveBeenCalled();
    expect(result).toEqual(levelMock);
  }) 

  test('it should find one level', async () => {
    const result = await levelController.findOne('1')
    expect(levelServiceMock.findOne).toHaveBeenCalledWith(1)
    expect(result).toEqual(levelMock)
  })

  test("it should update level", async () => {
    const upd_level =  {
      title: 'тяжелый',
    }

    const result = await levelController.update('1', upd_level)
    expect(levelServiceMock.update).toHaveBeenCalledWith(1, {...upd_level})
    expect(result).toEqual(levelMock)
  })

  test('it should delete level', async () => {
    const result = await levelController.remove('1')
    expect(levelServiceMock.remove).toHaveBeenCalledWith(1)
    expect(result).toEqual(levelMock)
  })

});
