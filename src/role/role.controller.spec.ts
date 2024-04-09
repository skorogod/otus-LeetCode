import { Test, TestingModule } from '@nestjs/testing';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

const request = require('supertest')

describe('RoleController', () => {
  let roleController: RoleController;
  let roleService: RoleService;

  const roleMock = {
    id: 1,
    title: 'Пользователь',
    description: 'Описание роли',
    rules: [
      0, 1
    ],
  }

  const roleServiceMock = {
    create: jest.fn().mockResolvedValueOnce(roleMock),
    findAll: jest.fn().mockResolvedValueOnce([roleMock]),
    findOne: jest.fn().mockResolvedValueOnce(roleMock),
    update: jest.fn().mockResolvedValueOnce(roleMock),
    remove: jest.fn().mockResolvedValueOnce(roleMock)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoleController],
      providers:  [{
        provide: RoleService,
        useValue: roleServiceMock
      }],
    }).compile();

    roleService = module.get<RoleService>(RoleService)
    roleController = module.get<RoleController>(RoleController);
  });

  it('should be defined', () => {
    expect(roleController).toBeDefined();
  });

  test("It should get all roles", async () => {
    expect(await roleController.findAll()).toEqual([roleMock])
  });

  test("it should create new role", async () => {
    const new_role = {
      title: 'Пользователь',
      description: 'Описание роли',
      rules: [
        0, 1
      ],
    }
    const result = await roleController.create(new_role as any);
    expect(roleServiceMock.create).toHaveBeenCalled();
    expect(result).toEqual(roleMock);
  }) 

  test('it should find one role', async () => {
    const result = await roleController.findOne('1')
    expect(roleServiceMock.findOne).toHaveBeenCalledWith(1)
    expect(result).toEqual(roleMock)
  })

  test("it should update role", async () => {
    const upd_role =  {
      title: 'Пользователь'
    }

    const result = await roleController.update('1', upd_role)
    expect(roleServiceMock.update).toHaveBeenCalledWith(1, {...upd_role})
    expect(result).toEqual(roleMock)
  })

  test('it should delete role', async () => {
    const result = await roleController.remove('1')
    expect(roleServiceMock.remove).toHaveBeenCalledWith(1)
    expect(result).toEqual(roleMock)
  })

});
