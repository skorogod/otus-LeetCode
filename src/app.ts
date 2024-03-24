import { NextFunction, Request, Response } from "express";
import { tasksRouter } from "./api/routes/tasks";
import { usersRouter } from "./api/routes/users";
import { rulesRouter } from "./api/routes/rules";
import { rolesRouter } from "./api/routes/roles";
import { commentsRouter } from "./api/routes/comments";
import express, { Express } from "express";
import bodyParser from "body-parser";

export const app: Express = express();

app.use(bodyParser.json());

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TS");
  });
  
  app.use(tasksRouter);
  app.use(usersRouter);
  app.use(commentsRouter);
  app.use(rolesRouter);
  app.use(rulesRouter);
  app.use(function (err: Error, req: Request, resp: Response, next: NextFunction){
    resp.status(500).send('Internal Server Error')
  })