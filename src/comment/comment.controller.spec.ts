import { Test, TestingModule } from '@nestjs/testing';
import { CommentController } from './comment.controller';
import { CommentService } from './comment.service';

const request = require('supertest')

describe('CommentController', () => {
  let commentController: CommentController;
  let commentService: CommentService;

  const commentMock = {
    id: 1,
    date: '2024-04-02T11:08:22',
    text: 'Норм',
    task: 0,
    user: 0,
  }

  const commentServiceMock = {
    create: jest.fn().mockResolvedValueOnce(commentMock),
    findAll: jest.fn().mockResolvedValueOnce([commentMock]),
    findOne: jest.fn().mockResolvedValueOnce(commentMock),
    update: jest.fn().mockResolvedValueOnce(commentMock),
    remove: jest.fn().mockResolvedValueOnce(commentMock)
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CommentController],
      providers:  [{
        provide: CommentService,
        useValue: commentServiceMock
      }],
    }).compile();

    commentService = module.get<CommentService>(CommentService)
    commentController = module.get<CommentController>(CommentController);
  });

  it('should be defined', () => {
    expect(commentController).toBeDefined();
  });

  test("It should get all comments", async () => {
    expect(await commentController.findAll()).toEqual([commentMock])
  });

  test("it should create new comment", async () => {
    const new_comment = {
      date: '2024-04-02T11:08:22',
      text: 'Норм',
      task: 0,
      user: 0,
    }
    const result = await commentController.create(new_comment as any);
    expect(commentServiceMock.create).toHaveBeenCalled();
    expect(result).toEqual(commentMock);
  }) 

  test('it should find one comment', async () => {
    const result = await commentController.findOne('1')
    expect(commentServiceMock.findOne).toHaveBeenCalledWith(1)
    expect(result).toEqual(commentMock)
  })

  test("it should update comment", async () => {
    const upd_comment =  {
      text: 'lalalal',
    }

    const result = await commentController.update('1', upd_comment)
    expect(commentServiceMock.update).toHaveBeenCalledWith(1, {...upd_comment})
    expect(result).toEqual(commentMock)
  })

  test('it should delete comment', async () => {
    const result = await commentController.remove('1')
    expect(commentServiceMock.remove).toHaveBeenCalledWith(1)
    expect(result).toEqual(commentMock)
  })

});
