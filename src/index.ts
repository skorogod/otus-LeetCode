import  express, {Express, Request, Response} from "express";
import { tasksRouter } from "./api/tasks";
import { dataSource } from "./db/dataSource";

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

app.listen(5000, () => {
    console.log('[Server]: Server is running at http://localhost:5000')
})
