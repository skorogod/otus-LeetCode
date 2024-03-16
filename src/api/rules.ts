import express, { Express, Request, Response } from 'express'
import { Rule} from '../db/entity';
import { dataSource } from '../db/dataSource';
import { Get, Post } from '@decorators/express';

export const rulesRouter = express.Router();

rulesRouter.get('/rules', async function(req: Request, resp: Response) {
    const rules = await dataSource.getRepository(Rule).find();
    resp.json(rules)
})

rulesRouter.get('/rules/:id', async function(req: Request, resp: Response) {
    const rule = await dataSource.getRepository(Rule).findOneBy({
        id: Number(req.params.id)
    })

    if (rule) {
        resp.json(rule)
    }
    else {
        resp.sendStatus(404)
    }
})

rulesRouter.post("/rules", async function(req: Request, resp: Response) {
    const rule = await dataSource.getRepository(Rule).create(req.body);
    const results = await dataSource.getRepository(Rule).save(rule);
    resp.json(results)
})

rulesRouter.put("/rules/:id", async function (req: Request, resp: Response) {
    const rule = await dataSource.getRepository(Rule).findOneBy({
        id: Number(req.params.id)
    })

    if (rule) {
        dataSource.getRepository(Rule).merge(rule, req.body)
        const results = await dataSource.getRepository(Rule).save(rule);
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

rulesRouter.delete('/rules/:id', async function (req: Request, resp: Response) {
    const results = await dataSource.getRepository(Rule).delete(req.params.id);
    if (results) {
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

