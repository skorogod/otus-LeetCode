import express from 'express'

export const rulesRouter = express.Router();

const ruleController = require('../controllers/ruleController')

rulesRouter.get('/rules', ruleController.ruleList)

rulesRouter.get('/rules/:id', ruleController.ruleDetail)

rulesRouter.post("/rules", ruleController.ruleCreate)

rulesRouter.put("/rules/:id", ruleController.ruleUpdate)

rulesRouter.patch("/rules/:id", ruleController.ruleUpdate)

rulesRouter.delete('/rules/:id', ruleController.ruleDelete)

