import { Request, Response } from "express";
import { IComment } from "../../types";

export const comments: IComment[] = [
  {
    id: 0,
    date: "2024-03-23T10:04:02",
    text: "Интересно",
    task: {
      id: 0,
      title: "Сортировка массива",
      description: "Отсортируйте массив [2,4,1,6]",
      level: {id: 0, title: 'light'},
      tags: ["Массив", "сортировка"],
      links: ["testlink.com"],
    },
    user: {
      id: 0,
      email: "test@mail.ru",
      password: "qwertyvbnm",
      username: "user123",
      role: {
        id: 0,
        title: "Пользователь",
        description: "Описание роли",
        rules: [
          {
            id: 0,
            title: "Просмотр задач",
            description:
              "Пользователь может просматривать информацию о задачах",
          },
          {
            id: 1,
            title: "Выполнение задач",
            description: "Пользователь может выполнять задачи",
          },
        ],
      },
    },
  },
];

exports.commentList = async function (req: Request, resp: Response) {
  const taskId = req.query.task ? req.query.task : undefined
  const userId = req.query.user ? req.query.user : undefined
  resp.json(comments);
};

exports.commentDetail = async function (req: Request, resp: Response) {
  const commentId = Number(req.params.id);
  const comment = comments.filter((el) => {
    return el.id === commentId;
  });

  if (comment.length) {
    return resp.json(comment[0]);
  } else {
    return resp.sendStatus(404);
  }
};

exports.commentCreate = async function (req: Request, resp: Response) {
  return resp.json(req.body);
};

exports.commentUpdate = async function (req: Request, resp: Response) {
  const commentId = Number(req.params.id);
  const comment = comments.filter((el) => {
    return el.id === commentId;
  });

  if (comment.length) {
    return resp.json(req.body);
  } else {
    return resp.sendStatus(404);
  }
};

exports.commentDelete = async function (req: Request, resp: Response) {
  const commentId = Number(req.params.id);
  const comment = comments.filter((el) => {
    return el.id === commentId;
  });

  if (comment.length) {
    return resp.json(comment[0]);
  } else {
    return resp.sendStatus(404);
  }
};
