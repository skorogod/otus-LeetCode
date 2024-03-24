import { Request, Response } from "express";

export const roles = [
  {
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
];

exports.roleList = async function (req: Request, resp: Response) {
  return resp.json(roles);
};

exports.roleDetail = async function (req: Request, resp: Response) {
  const roleId = Number(req.params.id);
  const role = roles.filter((el) => {
    return el.id === roleId;
  });

  if (role.length) {
    return resp.json(role[0]);
  } else {
    return resp.sendStatus(404);
  }
};

exports.roleCreate = async function (req: Request, resp: Response) {
  return resp.json(req.body);
};

exports.roleUpdate = async function (req: Request, resp: Response) {
  const roleId = Number(req.params.id);
  const role = roles.filter((el) => {
    return el.id === roleId;
  });

  if (role.length) {
    return resp.json(req.body);
  } else {
    return resp.sendStatus(404);
  }
};

exports.roleDelete = async function (req: Request, resp: Response) {
  const roleId = Number(req.params.id);
  const role = roles.filter((el) => {
    return el.id === roleId;
  });

  if (role.length) {
    return resp.json(role[0]);
  } else {
    return resp.sendStatus(404);
  }
};
