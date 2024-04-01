/**
 * @swagger
 * components:
 *   schemas:
 *     Rule:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the rule
 *         title:
 *           type: string
 *           description: The title of rule
 *         description:
 *           type: string
 *           description: The description of rule
 *       example:
 *        id: 0
 *        title: 'Просмотр задач'
 *        description: 'Пользователь может просматривать информацию о задачах'
 */

import express from 'express';

const ruleController = require('../controllers/ruleController')

export const rulesRouter = express.Router();


/**
 * @swagger
 * /rules:
 *   get:
 *     summary: get list of rules
 *     tags: [Rules]
 *     parameters:
 *       - in: query
 *         name: taskId
 *         schema:
 *           type: integer
 *         description: The id of task, that was ruleed
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         description: The id of user, who ruleed task   
 *     responses:
 *       200:
 *         description: Get list of rule
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rule'
 */

rulesRouter.get('/rules', ruleController.getRules)

/**
 * @swagger
 * /rules/{id}:
 *   get:
 *     summary: get special rule
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of rule
 *         schema:
 *           type: integer
 *     tags: [Rules]
 *     responses:
 *       200:
 *         description: The get special rule
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rule'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */

rulesRouter.get('/rules/:id', ruleController.getRuleById)

/** 
 * @swagger
 * /rules:
 *   post:
 *     summary: Create a new rule
 *     tags: [Rules]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Rule'
 *     responses:
 *       200:
 *         description: The created rule
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rule'
 *       500:
 *         description: Some server error
 */

rulesRouter.post("/rules", ruleController.createRule)

/**
* @swagger
* /rules/{id}:
*   put:
*     summary: Put special rule
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: id of rule
*         schema:
*           type: integer
*     tags: [Rules]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Rule'
*     responses:
*       200:
*         description: Put special rule
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Rule'
*       404:
*         description: Not found
*       500:
*         description: Some server error
*/

rulesRouter.put("/rules/:id", ruleController.updateRule)

/**
* @swagger
* /rules/{id}:
*   patch:
*     summary: Patch special rule
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: id of rule
*         schema:
*           type: integer
*     tags: [Rules]
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Rule'
*     responses:
*       200:
*         description: Patch special rule
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Rule'
*       404:
*         description: Not found
*       500:
*         description: Some server error
*/

rulesRouter.patch("/rules/:id", ruleController.updateRule)

/**
* @swagger
* /rules/{id}:
*   delete:
*     summary: Delete special rule
*     parameters:
*       - name: id
*         in: path
*         required: true
*         description: id of rule
*         schema:
*           type: integer
*     tags: [Rules]
*     responses:
*       200:
*         description: Delete special rule
*         content:
*           application/json:
*             schema:
*               $ref: '#/components/schemas/Rule'
*       404:
*         description: Not found
*       500:
*         description: Some server error
*/

rulesRouter.delete('/rules/:id', ruleController.deleteRule)