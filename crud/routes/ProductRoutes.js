import express from 'express';
const routes = express.Router();
 
import {ProductController,AddProduct,FetchCity ,deletebyaddress,Updatebyid} from "../controllers/ProductController.js"
routes.get("/", ProductController);
routes.post("/", AddProduct);
routes.get("/:city",FetchCity);
routes.delete("/:id" , deletebyaddress);
routes.put("/:id", Updatebyid);
export default routes;