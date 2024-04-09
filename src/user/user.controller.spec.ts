import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

const request = require('supertest')

describe('UserController', () => {
  let userController: UserController;
  let userService: UserService;

  const userMock = {
    id: 1,
    email: 'test@mail.ru',
    password: 'qwertyvbnm',
    username: 'user123',
    role: {
      id: 0,
      title: 'Пользователь',
      description: 'Описание роли',
      rules: [
        {
          id: 0,
          title: 'Просмотр задач',
          description: 'Пользователь может просматривать информацию о задачах',
        },
        {
          id: 1,
          title: 'Выполнение задач',
          description: 'Пользователь может выполнять задачи',
        },
      ],
    }
  }

  const userServiceMock = {
    create: jest.fn().mockResolvedValueOnce(userMock),
    findAll: jest.fn().mockResolvedValueOnce([userMock]),
    findOne: jest.fn().mockResolvedValueOnce(userMock),
    update: jest.fn().mockResolvedValueOnce(userMock),
    remove: jest.fn().mockResolvedValueOnce(userMock)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers:  [{
        provide: UserService,
        useValue: userServiceMock
      }],
    }).compile();

    userService = module.get<UserService>(UserService)
    userController = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(userController).toBeDefined();
  });

  test("It should get all users", async () => {
    expect(await userController.findAll()).toEqual([userMock])
  });

  test("it should create new user", async () => {
    const new_user = {
      email: 'test@mail.ru',
      password: 'qwertyvbnm',
      username: 'user123',
      role: 0
    }
    const result = await userController.create(new_user as any);
    expect(userServiceMock.create).toHaveBeenCalled();
    expect(result).toEqual(userMock);
  }) 

  test('it should find one user', async () => {
    const result = await userController.findOne('1')
    expect(userServiceMock.findOne).toHaveBeenCalledWith(1)
    expect(result).toEqual(userMock)
  })

  test("it should update user", async () => {
    const upd_user =  {
      email: 'update@mail.com',
    }

    const result = await userController.update('1', upd_user)
    expect(userServiceMock.update).toHaveBeenCalledWith(1, {...upd_user})
    expect(result).toEqual(userMock)
  })

  test('it should delete user', async () => {
    const result = await userController.remove('1')
    expect(userServiceMock.remove).toHaveBeenCalledWith(1)
    expect(result).toEqual(userMock)
  })

});
