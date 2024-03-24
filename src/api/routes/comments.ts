import express, { Response, Request } from 'express';

const commentController = require('../controllers/commentComtroller')

export const commentsRouter = express.Router();


commentsRouter.get('/comments', commentController.commentList)

commentsRouter.get('/comments/:id', commentController.commentDetail)

commentsRouter.post("/comments", commentController.commentCreate)

commentsRouter.put("/comments/:id", commentController.commentUpdate)

commentsRouter.patch("/comments/:id", commentController.commentUpdate)

commentsRouter.delete('/comments/:id', commentController.commentDelete)

