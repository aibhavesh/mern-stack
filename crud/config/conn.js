import mongoose from "mongoose";
 
mongoose.connect("mongodb://0.0.0.0:27017/meet")
.then(() => {
    console.log("MongoDB connected");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});