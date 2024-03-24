import { Request, Response } from "express";

export const levels = [
  {
    id: 0,
    title: "light"
  },
];

exports.levelList = async function (req: Request, resp: Response) {
  return resp.json(levels);
};

exports.levelDetail = async function (req: Request, resp: Response) {
  const levelId = Number(req.params.id);
  const level = levels.filter((el) => {
    return el.id === levelId;
  });

  if (level.length) {
    return resp.json(level[0]);
  } else {
    return resp.sendStatus(404);
  }
};

exports.levelCreate = async function (req: Request, resp: Response) {
  return resp.json(req.body);
};

exports.levelUpdate = async function (req: Request, resp: Response) {
  const levelId = Number(req.params.id);
  const level = levels.filter((el) => {
    return el.id === levelId;
  });

  if (level.length) {
    return resp.json(req.body);
  } else {
    return resp.sendStatus(404);
  }
};

exports.levelDelete = async function (req: Request, resp: Response) {
  const levelId = Number(req.params.id);
  const level = levels.filter((el) => {
    return el.id === levelId;
  });

  if (level.length) {
    return resp.json(level[0]);
  } else {
    return resp.sendStatus(404);
  }
};
