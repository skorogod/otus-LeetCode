import express, { Express, Request, Response } from 'express'
import { Comment } from '../db/entities/comment.entity';
import { dataSource } from '../db/dataSource';


export const commentsRouter = express.Router();


commentsRouter.get('/comments', async function(req: Request, resp: Response) {
    const taskId = req.query.taskId ? Number(req.query.taskId) : undefined
    const userId = req.query.userId ? Number(req.query.taskId) : undefined
    
    let comments = await dataSource.getRepository(Comment).find({
        where: {
            user: {
                id: userId
            },
            task: {
                id: taskId
            }
        }
    });
    
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
    /*  
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new comment',
            required: true,
            schema: {
                $date: '2005-07-08T00:00:00+0000',
                $text: 'Норм',
                $task: 0,
                $user: 0
            }
        }
    } */
    
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

