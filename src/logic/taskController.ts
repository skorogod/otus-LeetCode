import { Request, Response } from "express";
import { Task } from "../../db/entities/task.entity";
import { dataSource } from "../../db/dataSource";

exports.taskList = async function (req: Request, resp: Response) {
  const tasks = await dataSource.getRepository(Task).find();
  resp.json(tasks);
};

exports.taskDetail = async function (req: Request, resp: Response) {
  const task = await dataSource.getRepository(Task).findOneBy({
    id: Number(req.params.id),
  });

  if (task) {
    resp.json(task);
  } else {
    resp.sendStatus(404);
  }
};

exports.taskCreate = async function (req: Request, resp: Response) {
  const task = await dataSource.getRepository(Task).create(req.body);
  const results = await dataSource.getRepository(Task).save(task);
  resp.json(results);
};

exports.taskUpdate = async function (req: Request, resp: Response) {
  const task = await dataSource.getRepository(Task).findOneBy({
    id: Number(req.params.id),
  });

  if (task) {
    dataSource.getRepository(Task).merge(task, req.body);
    const results = await dataSource.getRepository(Task).save(task);
    resp.json(results);
  } else {
    resp.sendStatus(404);
  }
};

exports.taskDelete = async function (req: Request, resp: Response) {
  const results = await dataSource.getRepository(Task).delete(req.params.id);
  if (results) {
    resp.json(results);
  } else {
    resp.sendStatus(404);
  }
};
