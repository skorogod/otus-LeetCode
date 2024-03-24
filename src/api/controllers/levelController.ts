import { Request, Response } from "express";

export const levels = [
  {
    id: 0,
    title: "light"
  },
];

exports.getLevels = async function (req: Request, resp: Response) {
  return resp.json(levels);
};

exports.getLevelById = async function (req: Request, resp: Response) {
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

exports.createLevel = async function (req: Request, resp: Response) {
  return resp.json(req.body);
};

exports.updateLevel = async function (req: Request, resp: Response) {
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

exports.deleteLevel = async function (req: Request, resp: Response) {
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
