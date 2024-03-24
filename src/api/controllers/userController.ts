import { Request, Response } from "express";

export const users = [
  {
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
          description: "Пользователь может просматривать информацию о задачах",
        },
        {
          id: 1,
          title: "Выполнение задач",
          description: "Пользователь может выполнять задачи",
        },
      ],
    },
  },
];

exports.userList = async function (req: Request, resp: Response) {
  return resp.json(users);
};

exports.userDetail = async function (req: Request, resp: Response) {
  const userId = Number(req.params.id);
  const user = users.filter((el) => {
    return el.id === userId;
  });

  if (user.length) {
    return resp.json(user[0]);
  } else {
    return resp.sendStatus(404);
  }
};

exports.userCreate = async function (req: Request, resp: Response) {
  return resp.json(req.body);
};

exports.userUpdate = async function (req: Request, resp: Response) {
  const userId = Number(req.params.id);
  const user = users.filter((el) => {
    return el.id === userId;
  });

  if (user.length) {
    return resp.json(req.body);
  } else {
    return resp.sendStatus(404);
  }
};

exports.userDelete = async function (req: Request, resp: Response) {
  const userId = Number(req.params.id);
  const user = users.filter((el) => {
    return el.id === userId;
  });

  if (user.length) {
    return resp.json(user[0]);
  } else {
    return resp.sendStatus(404);
  }
};
