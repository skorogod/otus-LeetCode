import express, { Express, Request, Response } from 'express'
import { Role} from '../db/entity';
import { dataSource } from '../db/dataSource';
import { Get, Post } from '@decorators/express';

export const rolesRouter = express.Router();

rolesRouter.get('/roles', async function(req: Request, resp: Response) {
    const roles = await dataSource.getRepository(Role).find();
    resp.json(roles)
})

rolesRouter.get('/roles/:id', async function(req: Request, resp: Response) {
    const role = await dataSource.getRepository(Role).findOneBy({
        id: Number(req.params.id)
    })

    if (role) {
        resp.json(role)
    }
    else {
        resp.sendStatus(404)
    }
})

rolesRouter.post("/roles", async function(req: Request, resp: Response) {
    const role = await dataSource.getRepository(Role).create(req.body);
    const results = await dataSource.getRepository(Role).save(role);
    resp.json(results)
})

rolesRouter.put("/roles/:id", async function (req: Request, resp: Response) {
    const role = await dataSource.getRepository(Role).findOneBy({
        id: Number(req.params.id)
    })

    if (role) {
        dataSource.getRepository(Role).merge(role, req.body)
        const results = await dataSource.getRepository(Role).save(role);
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

rolesRouter.delete('/roles/:id', async function (req: Request, resp: Response) {
    const results = await dataSource.getRepository(Role).delete(req.params.id);
    if (results) {
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

