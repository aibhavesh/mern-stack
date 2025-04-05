 import Product from "../models/ProductSchema.js";
 let ProductController = async(req , res)=>{
   let result = await Product.find();
   res.send(result);
 }
 let AddProduct = async(req , res)=>{
     await Product.create(req.body);
     res.send("Product added successfully");
 }
 let FetchCity= async(req , res)=>{
    let city = req.params.city;
    let result = await Product.find({ address: city});
    res.send(result);
 }
 let deletebyaddress = (req,res)=>{
   //console.log(req.params);
   let id = req.params.id;
   let result = Product.deleteMany({ _id : id});
   res.send("deleted successfully");
  }
  const Updatebyid = async (req, res) => {
    
    let id = req.params.id;
    let result = await Product.updateOne({ _id: id }, req.body );
    res.send("updated successfully");
  }
 
 export { ProductController, AddProduct , FetchCity ,deletebyaddress ,Updatebyid};