import express from 'express'

export const tasksRouter = express.Router();

const taskContoller = require('../controllers/taskController')

tasksRouter.get('/tasks', taskContoller.taskList)

tasksRouter.get('/tasks/:id', taskContoller.taskDetail)

tasksRouter.post("/tasks", taskContoller.taskCreate)

tasksRouter.put("/tasks/:id", taskContoller.taskUpdate)

tasksRouter.patch("/tasks/:id", taskContoller.taskUpdate)

tasksRouter.delete('/tasks/:id', taskContoller.taskDelete)