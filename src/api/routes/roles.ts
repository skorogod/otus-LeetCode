import express from "express";

export const rolesRouter = express.Router();

const roleController = require("../controllers/roleController");

rolesRouter.get("/roles", roleController.roleList);

rolesRouter.get("/roles/:id", roleController.roleDetail);

rolesRouter.post("/roles", roleController.roleCreate);

rolesRouter.put("/roles/:id", roleController.roleUpdate);

rolesRouter.patch("/roles/:id", roleController.roleUpdate);

rolesRouter.delete("/roles/:id", roleController.roleDelete);
