/**
 * @swagger
 * components:
 *   schemas:
 *     Role:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - rules
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the role
 *         title:
 *           type: string
 *           description: The title of role
 *         description:
 *           type: string
 *           description: The description of role
 *         rules:
 *           type: array
 *           items: integer
 *           description: Rules of Role
 *       example:
 *        id: 0
 *        title: 'Подьзователь'
 *        description: 'Пользователь со стандартными правами'
 *        rules: [0,1]
 */
/**
 * @swagger
 * tags:
 *   name: Roles
 *   description: The roles managing API
 * /roles:
 *   get:
 *     summary: get list of roles
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Get list of role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *   post:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: The created role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       500:
 *         description: Some server error
 * 
 * /roles/{id}:
 *   get:
 *     summary: get special role
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of role
 *         schema:
 *           type: integer
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: The get special role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 *   
 *   patch:
 *     summary: Patch special role
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of role
 *         schema:
 *           type: integer
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Patch special role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 *   
 *   put:
 *     summary: Put special role
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of role
 *         schema:
 *           type: integer
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Role'
 *     responses:
 *       200:
 *         description: Put special role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete special role
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of role
 *         schema:
 *           type: integer
 *     tags: [Roles]
 *     responses:
 *       200:
 *         description: Delete special role
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Role'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */