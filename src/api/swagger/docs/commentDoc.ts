/**
 * @swagger
 * components:
 *   schemas:
 *     Comment:
 *       type: object
 *       required:
 *         - date
 *         - text
 *         - task
 *         - user
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the comment
 *         date:
 *           type: string
 *           format: date-time
 *           description: The datetime of comment
 *         text:
 *           type: string
 *           description: The text of comment
 *         task:
 *           type: integer
 *           description: ID of task
 *         user:
 *           type: integer
 *           description: Id of user
 *       example:
 *        id: 0
 *        date: '2024-03-23T10:04:02'
 *        text: 'Интересно'
 *        task: 0
 *        user: 0
 */
/**
 * @swagger
 * tags:
 *   name: Comments
 *   description: The comments managing API
 * /comments:
 *   get:
 *     summary: get list of comments
 *     tags: [Comments]
 *     parameters:
 *       - in: query
 *         name: taskId
 *         schema:
 *           type: integer
 *         description: The id of task, that was commented
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         description: The id of user, who commented task   
 *     responses:
 *       200:
 *         description: Get list of comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *   post:
 *     summary: Create a new comment
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: The created comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       500:
 *         description: Some server error
 * 
 * /comments/{id}:
 *   get:
 *     summary: get special comment
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of comment
 *         schema:
 *           type: integer
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: The get special comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 *   
 *   patch:
 *     summary: Patch special comment
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of comment
 *         schema:
 *           type: integer
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Patch special comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 *   
 *   put:
 *     summary: Put special comment
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of comment
 *         schema:
 *           type: integer
 *     tags: [Comments]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comment'
 *     responses:
 *       200:
 *         description: Put special comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete special comment
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of comment
 *         schema:
 *           type: integer
 *     tags: [Comments]
 *     responses:
 *       200:
 *         description: Delete special comment
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comment'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */