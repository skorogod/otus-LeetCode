import express, { Express, Request, Response } from 'express'

import { ITask, ILevels } from '../types';

export const tasksRouter = express.Router();

const t = 
        {
            title: 'JS',
            description: 'test',
            level: ILevels.hard,
            links: ['link1'],
            tags: ['js tag']
        }

const tasks: ITask[] = []

tasksRouter.get('/api/task', (req: Request, res: Response) => {
    res.json(tasks)
})

tasksRouter.post('/api/task', (req, res) => {
    console.log("TASK POST")
})
