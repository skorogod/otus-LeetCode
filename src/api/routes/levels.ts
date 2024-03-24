import express from "express";

export const levelsRouter = express.Router();

const levelController = require("../controllers/levelController");

levelsRouter.get("/levels", levelController.levelList);

levelsRouter.get("/levels/:id", levelController.levelDetail);

levelsRouter.post("/levels", levelController.levelCreate);

levelsRouter.put("/levels/:id", levelController.levelUpdate);

levelsRouter.patch("/levels/:id", levelController.levelUpdate);

levelsRouter.delete("/levels/:id", levelController.levelDelete);
