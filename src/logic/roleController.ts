import { Request, Response } from "express";
import { Role } from "../../db/entities/role.entity";
import { dataSource } from "../../db/dataSource";

exports.roleList = async function (req: Request, resp: Response) {
  const roles = await dataSource.getRepository(Role).find();
  resp.json(roles);
};

exports.roleDetail = async function (req: Request, resp: Response) {
  const role = await dataSource.getRepository(Role).findOneBy({
    id: Number(req.params.id),
  });

  if (role) {
    resp.json(role);
  } else {
    resp.sendStatus(404);
  }
};

exports.roleCreate = async function (req: Request, resp: Response) {
  console.log("BODY ", req.body);
  const role = await dataSource.getRepository(Role).create(req.body);
  const results = await dataSource.getRepository(Role).save(role);
  resp.json(results);
};

exports.roleUpdate = async function (req: Request, resp: Response) {
  const role = await dataSource.getRepository(Role).findOneBy({
    id: Number(req.params.id),
  });

  if (role) {
    dataSource.getRepository(Role).merge(role, req.body);
    const results = await dataSource.getRepository(Role).save(role);
    resp.json(results);
  } else {
    resp.sendStatus(404);
  }
};

exports.roleDelete = async function (req: Request, resp: Response) {
  const results = await dataSource.getRepository(Role).delete(req.params.id);
  if (results) {
    resp.json(results);
  } else {
    resp.sendStatus(404);
  }
};
