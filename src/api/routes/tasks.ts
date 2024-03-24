/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - level
 *         - tags
 *         - links
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the task
 *         title:
 *           type: string
 *           description: The title of task
 *         description:
 *           type: string
 *           description: The description of task
 *         level:
 *           type: integer
 *           description: level of task
 *         tags:
 *           type: array
 *           items: string
 *           description: tags of task
 *         links:
 *           type: array
 *           items: string
 *           description: links pf task
 *       example:
 *        id: 0
 *        title: "Сортировка массива"
 *        description: "Отсортируйте массив [2,4,1,6]"
 *        level: ILevels.light
 *        tags: ["Массив", "сортировка"]
 *        links: ["testlink.com"]
 */

import express from 'express';

const taskController = require('../controllers/taskController')

export const tasksRouter = express.Router();


/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: get list of tasks
 *     tags: [Tasks]
 *     parameters:
 *       - in: query
 *         name: taskId
 *         schema:
 *           type: integer
 *         description: The id of task, that was tasked
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         description: The id of user, who tasked task   
 *     responses:
 *       200:
 *         description: Get list of task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 */

tasksRouter.get('/tasks', taskController.getTasks)

/**
 * @swagger
 * /tasks/{id}:
 *   get:
 *     summary: get special task
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of task
 *         schema:
 *           type: integer
 *     tags: [Tasks]
 *     responses:
 *       200:
 *         description: The get special task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */

tasksRouter.get('/tasks/:id', taskController.getTaskById)

/** 
 * @swagger
 * /tasks:
 *   post:
 *     summary: Create a new task
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Task'
 *     responses:
 *       200:
 *         description: The created task
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Task'
 *       500:
 *         description: Some server error
 */

tasksRouter.post("/tasks", taskController.createTask)

/**
* @swagger
* /tasks/{id}:
*   put:
*     summary: Put special task
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: id of task
*         schema:
*           type: integer
*     tags: [Tasks]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Task'
*     responses:
*       200:
*         description: Put special task
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Task'
*       404:
*         description: Not found
*       500:
*         description: Some server error
*/

tasksRouter.put("/tasks/:id", taskController.updateTask)

/**
* @swagger
* /tasks/{id}:
*   patch:
*     summary: Patch special task
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: id of task
*         schema:
*           type: integer
*     tags: [Tasks]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Task'
*     responses:
*       200:
*         description: Patch special task
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Task'
*       404:
*         description: Not found
*       500:
*         description: Some server error
*/

tasksRouter.patch("/tasks/:id", taskController.updateTask)

/**
* @swagger
* /tasks/{id}:
*   delete:
*     summary: Delete special task
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: id of task
*         schema:
*           type: integer
*     tags: [Tasks]
*     responses:
*       200:
*         description: Delete special task
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Task'
*       404:
*         description: Not found
*       500:
*         description: Some server error
*/

tasksRouter.delete('/tasks/:id', taskController.deleteTask)