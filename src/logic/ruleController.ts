import { Request, Response } from "express";
import { Rule } from "../../db/entities/rule.entity";
import { dataSource } from "../../db/dataSource";

exports.ruleList = async function (req: Request, resp: Response) {
  const rules = await dataSource.getRepository(Rule).find();
  resp.json(rules);
};

exports.ruleDetail = async function (req: Request, resp: Response) {
  const rule = await dataSource.getRepository(Rule).findOneBy({
    id: Number(req.params.id),
  });

  if (rule) {
    resp.json(rule);
  } else {
    resp.sendStatus(404);
  }
};

exports.ruleCreate = async function (req: Request, resp: Response) {
  const rule = await dataSource.getRepository(Rule).create(req.body);
  const results = await dataSource.getRepository(Rule).save(rule);
  resp.json(results);
};

exports.ruleUpdate = async function (req: Request, resp: Response) {
  const rule = await dataSource.getRepository(Rule).findOneBy({
    id: Number(req.params.id),
  });

  if (rule) {
    dataSource.getRepository(Rule).merge(rule, req.body);
    const results = await dataSource.getRepository(Rule).save(rule);
    resp.json(results);
  } else {
    resp.sendStatus(404);
  }
};

exports.ruleDelete = async function (req: Request, resp: Response) {
  const results = await dataSource.getRepository(Rule).delete(req.params.id);
  if (results) {
    resp.json(results);
  } else {
    resp.sendStatus(404);
  }
};
