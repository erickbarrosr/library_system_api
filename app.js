import express from "express";
import connectToDatabase from "./src/config/connectDb.js";
import initializeRoutes from "./src/routes/router.js";

const dbConnection = await connectToDatabase();

dbConnection.on("error", (err) => {
  console.error("> Connection database error", err);
  console.log();
});

dbConnection.once("open", () => {
  console.log("> Database successfully connected");
  console.log();
});

const app = express();

initializeRoutes(app);

export default app;
