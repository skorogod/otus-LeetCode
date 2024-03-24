import { dataSource } from "./db/dataSource";
import { swaggerSpec } from "./api/swagger/swagger";
import swaggerUi from "swagger-ui-express";

import { app } from "./app";

dataSource
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized");
  })
  .catch((err) => {
    console.log("Error during Data Source initiakization", err);
  });

app.listen(5000, () => {
  console.log("[Server]: Server is running at http://localhost:5000");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
