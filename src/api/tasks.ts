import express, { Express, Request, Response } from 'express'
import { Task } from '../db/entities/task.entity';
import { dataSource } from '../db/dataSource';
import { Get, Post } from '@decorators/express';

export const tasksRouter = express.Router();

tasksRouter.get('/tasks', async function(req: Request, resp: Response) {
    const tasks = await dataSource.getRepository(Task).find();
    resp.json(tasks)
})

tasksRouter.get('/tasks/:id', async function(req: Request, resp: Response) {
    const task = await dataSource.getRepository(Task).findOneBy({
        id: Number(req.params.id)
    })

    if (task) {
        resp.json(task)
    }
    else {
        resp.sendStatus(404)
    }
})

tasksRouter.post("/tasks", async function(req: Request, resp: Response) {
    const task = await dataSource.getRepository(Task).create(req.body);
    const results = await dataSource.getRepository(Task).save(task);
    resp.json(results)
    /*  
        #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new task',
            required: true,
            schema: {
                $title: 'Сортировка массива',
                $description: 'Сортировка массива',
                $level: 0,
                $tags: ['массив', 'сортировка']
                $links: ['testlink.com'],
                $user: 0
            }
        }
    } */
})

tasksRouter.put("/tasks/:id", async function (req: Request, resp: Response) {
    const task = await dataSource.getRepository(Task).findOneBy({
        id: Number(req.params.id)
    })

    if (task) {
        dataSource.getRepository(Task).merge(task, req.body)
        const results = await dataSource.getRepository(Task).save(task);
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

tasksRouter.delete('/tasks/:id', async function (req: Request, resp: Response) {
    const results = await dataSource.getRepository(Task).delete(req.params.id);
    if (results) {
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

// export class TaskControler {
//     @Get('/tasks')
//     getAll() {
//         return dataSource.manager.find(Task)
//     }

//     @Get('/tasks/:id')
//     get(req: Request, resp: Response) {
//         return dataSource.manager.findBy(Task, {id: Number(req.params.id)})
//     }
// }