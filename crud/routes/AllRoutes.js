import express from "express";
const routes = express.Router();
import ProductRoutes from "./ProductRoutes.js";
// Importing all the routes from the controllers

routes.use("/api/v1/product", ProductRoutes );

export default routes;