import express, { Express, Request, Response } from 'express'
import { Comment} from '../db/entity';
import { dataSource } from '../db/dataSource';
import { Get, Post } from '@decorators/express';

export const commentsRouter = express.Router();

commentsRouter.get('/comments', async function(req: Request, resp: Response) {
    const comments = await dataSource.getRepository(Comment).find();
    resp.json(comments)
})

commentsRouter.get('/comments/:id', async function(req: Request, resp: Response) {
    const comment = await dataSource.getRepository(Comment).findOneBy({
        id: Number(req.params.id)
    })

    if (comment) {
        resp.json(comment)
    }
    else {
        resp.sendStatus(404)
    }
})

commentsRouter.post("/comments", async function(req: Request, resp: Response) {
    const comment = await dataSource.getRepository(Comment).create(req.body);
    const results = await dataSource.getRepository(Comment).save(comment);
    resp.json(results)
})

commentsRouter.put("/comments/:id", async function (req: Request, resp: Response) {
    const comment = await dataSource.getRepository(Comment).findOneBy({
        id: Number(req.params.id)
    })

    if (comment) {
        dataSource.getRepository(Comment).merge(comment, req.body)
        const results = await dataSource.getRepository(Comment).save(comment);
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

commentsRouter.delete('/comments/:id', async function (req: Request, resp: Response) {
    const results = await dataSource.getRepository(Comment).delete(req.params.id);
    if (results) {
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

