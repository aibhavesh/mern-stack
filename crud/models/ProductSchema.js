import  "../config/conn.js";
import mongoose from "mongoose";
// Product Schema
 let ProSchema = mongoose.Schema({
   name : String,
    price : Number,
    address : String,
    description : String,
 })
 let Product = mongoose.model("Product", ProSchema);
 export default Product;
 