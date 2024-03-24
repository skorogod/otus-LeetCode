import { Request, Response } from "express";

export const rules = [
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
];

exports.ruleList = async function (req: Request, resp: Response) {
  return resp.json(rules);
};

exports.ruleDetail = async function (req: Request, resp: Response) {
  const ruleId = Number(req.params.id);
  const rule = rules.filter((el) => {
    return el.id === ruleId;
  });

  if (rule.length) {
    return resp.json(rule[0]);
  } else {
    return resp.sendStatus(404);
  }
};

exports.ruleCreate = async function (req: Request, resp: Response) {
  return resp.json(req.body);
};

exports.ruleUpdate = async function (req: Request, resp: Response) {
  const ruleId = Number(req.params.id);
  const rule = rules.filter((el) => {
    return el.id === ruleId;
  });

  if (rule.length) {
    return resp.json(req.body);
  } else {
    return resp.sendStatus(404);
  }
};

exports.ruleDelete = async function (req: Request, resp: Response) {
  const ruleId = Number(req.params.id);
  const rule = rules.filter((el) => {
    return el.id === ruleId;
  });

  if (rule.length) {
    return resp.json(rule[0]);
  } else {
    return resp.sendStatus(404);
  }
};
