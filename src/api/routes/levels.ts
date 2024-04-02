/**
 * @swagger
 * components:
 *   schemas:
 *     Level:
 *       type: object
 *       required:
 *         - title
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the level
 *         date:
 *           type: string
 *           format: date-time
 *           description: The datetime of level
 *         text:
 *           type: string
 *           description: The text of level
 *         task:
 *           type: integer
 *           description: ID of task
 *         user:
 *           type: integer
 *           description: Id of user
 *       example:
 *        id: 0
 *        title: 'Light'
 */

import express from 'express';

const levelController = require('../controllers/levelController');

export const levelsRouter = express.Router();

/**
 * @swagger
 * /levels:
 *   get:
 *     summary: get list of levels
 *     tags: [Levels]
 *     parameters:
 *       - in: query
 *         name: taskId
 *         schema:
 *           type: integer
 *         description: The id of task, that was leveled
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         description: The id of user, who leveled task
 *     responses:
 *       200:
 *         description: Get list of level
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Level'
 */

levelsRouter.get('/levels', levelController.getLevels);

/**
 * @swagger
 * /levels/{id}:
 *   get:
 *     summary: get special level
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of level
 *         schema:
 *           type: integer
 *     tags: [Levels]
 *     responses:
 *       200:
 *         description: The get special level
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Level'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */

levelsRouter.get('/levels/:id', levelController.getLevelById);

/**
 * @swagger
 * /levels:
 *   post:
 *     summary: Create a new level
 *     tags: [Levels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Level'
 *     responses:
 *       200:
 *         description: The created level
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Level'
 *       500:
 *         description: Some server error
 */

levelsRouter.post('/levels', levelController.createLevel);

/**
 * @swagger
 * /levels/{id}:
 *   put:
 *     summary: Put special level
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of level
 *         schema:
 *           type: integer
 *     tags: [Levels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Level'
 *     responses:
 *       200:
 *         description: Put special level
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Level'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */

levelsRouter.put('/levels/:id', levelController.updateLevel);

/**
 * @swagger
 * /levels/{id}:
 *   patch:
 *     summary: Patch special level
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of level
 *         schema:
 *           type: integer
 *     tags: [Levels]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Level'
 *     responses:
 *       200:
 *         description: Patch special level
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Level'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */

levelsRouter.patch('/levels/:id', levelController.updateLevel);

/**
 * @swagger
 * /levels/{id}:
 *   delete:
 *     summary: Delete special level
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of level
 *         schema:
 *           type: integer
 *     tags: [Levels]
 *     responses:
 *       200:
 *         description: Delete special level
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Level'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */

levelsRouter.delete('/levels/:id', levelController.deleteLevel);
