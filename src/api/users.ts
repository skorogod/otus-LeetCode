import express, { Express, Request, Response } from 'express'
import { User } from '../db/entities/user.entity';
import { dataSource } from '../db/dataSource';
import { Get, Post } from '@decorators/express';

export const usersRouter = express.Router();

usersRouter.get('/users', async function(req: Request, resp: Response) {
    const users = await dataSource.getRepository(User).find();
    resp.json(users)
})

usersRouter.get('/users/:id', async function(req: Request, resp: Response) {
    const user = await dataSource.getRepository(User).findOneBy({
        id: Number(req.params.id)
    })

    if (user) {
        resp.json(user)
    }
    else {
        resp.sendStatus(404)
    }
})

usersRouter.post("/users", async function(req: Request, resp: Response) {
    const user = await dataSource.getRepository(User).create(req.body as User);
    const results = await dataSource.getRepository(User).save(user);
    resp.json(results)
    /*  #swagger.parameters['body'] = {
            in: 'body',
            description: 'Add new user',
            schema: {
                $email: 'example@mail.ru',
                $password: 'fkndjfbnvsdb',
                $username: 'user123',
                $role: 0
            }
    } */
})

usersRouter.put("/users/:id", async function (req: Request, resp: Response) {
    const user = await dataSource.getRepository(User).findOneBy({
        id: Number(req.params.id)
    })

    if (user) {
        dataSource.getRepository(User).merge(user, req.body)
        const results = await dataSource.getRepository(User).save(user);
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

usersRouter.delete('/users/:id', async function (req: Request, resp: Response) {
    const results = await dataSource.getRepository(User).delete(req.params.id);
    if (results) {
        resp.json(results)
    }
    else {
        resp.sendStatus(404)
    }
})

