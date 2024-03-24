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
 *           description: The auto-generated id of the Level
 *         title:
 *           type: string
 *           description: The title of Level
 *       example:
 *        id: 0
 *        title: 'Light'
 */
/**
 * @swagger
 * tags:
 *   name: Levels
 *   description: The levels managing API
 * /levels:
 *   get:
 *     summary: get list of levels
 *     tags: [Levels]
 *     responses:
 *       200:
 *         description: Get list of level
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Level'
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
 * 
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
 *   
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
 *   
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
 * 
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