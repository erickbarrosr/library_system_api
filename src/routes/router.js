import express from "express";
import bookRoutes from "./bookRoutes.js";

const initializeRoutes = (app) => {
  app.use(express.json(), bookRoutes);
};

export default initializeRoutes;
