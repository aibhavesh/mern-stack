import mongoose from "../config/conn.js";


let studentSchema = mongoose.Schema({
    name: String,
    fee: Number,
    city: String
});

let stu = mongoose.model("Student", studentSchema);

export default stu;