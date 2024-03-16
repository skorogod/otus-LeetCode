import  express, {Express, Request, Response} from "express";
import { tasksRouter } from "./api/tasks";
import { usersRouter } from "./api/users";
import { rulesRouter } from "./api/rules";
import { rolesRouter } from "./api/roles";
import { commentsRouter } from "./api/comments";
import { dataSource } from "./db/dataSource";

import swaggerUi from "swagger-ui-express";
import swaggerOutput from "./swagger_output.json";

const app: Express = express();

dataSource
        .initialize()
        .then(() => {
            console.log('Data Source has been initialized')
        })
        .catch((err) => {
            console.log("Error during Data Source initiakization", err)
        })


app.get("/", (req: Request, res: Response) => {
    res.send("Express + TS")
})

app.use(tasksRouter)
app.use(usersRouter)
app.use(commentsRouter)
app.use(rolesRouter)
app.use(rulesRouter)

app.listen(5000, () => {
    console.log('[Server]: Server is running at http://localhost:5000')
})

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));