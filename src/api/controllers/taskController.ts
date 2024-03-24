import { Request, Response } from "express";

export const tasks = [
  {
    id: 0,
    title: "Сортировка массива",
    description: "Отсортируйте массив [2,4,1,6]",
    level: {id: 0, title: 'light'},
    tags: ["Массив", "сортировка"],
    links: ["testlink.com"],
  },
];

exports.taskList = async function (req: Request, resp: Response) {
  return resp.json(tasks);
};

exports.taskDetail = async function (req: Request, resp: Response) {
  const taskId = Number(req.params.id);
  const task = tasks.filter((el) => {
    return el.id === taskId;
  });

  if (task.length) {
    return resp.json(task[0]);
  } else {
    return resp.sendStatus(404);
  }
};

exports.taskCreate = async function (req: Request, resp: Response) {
  return resp.json(req.body);
};

exports.taskUpdate = async function (req: Request, resp: Response) {
  const taskId = Number(req.params.id);
  const task = tasks.filter((el) => {
    return el.id === taskId;
  });

  if (task.length) {
    return resp.json(req.body);
  } else {
    return resp.sendStatus(404);
  }
};

exports.taskDelete = async function (req: Request, resp: Response) {
  const taskId = Number(req.params.id);
  const task = tasks.filter((el) => {
    return el.id === taskId;
  });

  if (task.length) {
    return resp.json(task[0]);
  } else {
    return resp.sendStatus(404);
  }
};
