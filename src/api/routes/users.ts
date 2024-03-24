import express from 'express'

export const usersRouter = express.Router();

const userController = require('../controllers/userController')

usersRouter.get('/users', userController.userList)

usersRouter.get('/users/:id',userController.userDetail)

usersRouter.post("/users", userController.userCreate)

usersRouter.put("/users/:id", userController.userUpdate)
usersRouter.patch("/users/:id", userController.userUpdate)

usersRouter.delete('/users/:id', userController.userDelete)

