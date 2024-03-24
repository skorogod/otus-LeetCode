/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - username
 *         - role
 *       properties:
 *         id:
 *           type: integer
 *           description: The auto-generated id of the user
 *         email:
 *           type: string
 *           description: The email of user
 *         password:
 *           type: string
 *           description: The password of user
 *         username:
 *           type: string
 *           description: username of user
 *         role:
 *           type: integer
 *           description: Id of role
 *       example:
 *        id: 0
 *        email: 'test@mail.ru'
 *        password: 'qwertyvbnm'
 *        username: 'user123'
 *        role: 0
 */
/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The users managing API
 * /users:
 *   get:
 *     summary: get list of users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Get list of user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * 
 * /users/{id}:
 *   get:
 *     summary: get special user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of user
 *         schema:
 *           type: integer
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The get special user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 *   
 *   patch:
 *     summary: Patch special user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of user
 *         schema:
 *           type: integer
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Patch special user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 *   
 *   put:
 *     summary: Put special user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of user
 *         schema:
 *           type: integer
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: Put special user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 * 
 *   delete:
 *     summary: Delete special user
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id of user
 *         schema:
 *           type: integer
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Delete special user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Not found
 *       500:
 *         description: Some server error
 */