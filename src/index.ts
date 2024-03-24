import { swaggerSpec } from "./api/swagger/swagger";
import swaggerUi from "swagger-ui-express";

import { app } from "./app";


app.listen(5000, () => {
  console.log("[Server]: Server is running at http://localhost:5000");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
