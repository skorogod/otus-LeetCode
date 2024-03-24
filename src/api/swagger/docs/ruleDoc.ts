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
/**
 * @swagger
 * tags:
 *   name: Rules
 *   description: The rules managing API
 * /rules:
 *   get:
 *     summary: get list of rules
 *     tags: [Rules]
 *     responses:
 *       200:
 *         description: Get list of rule
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Rule'
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
 * 
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
 *   
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
 *   
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
 * 
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