require("../connection/conn")
let moongoose = require("mongoose");
let demo = moongoose.Schema({
    name: String,
    age: Number,
    email: String
}, { collection: "demo" });
const Demo = moongoose.model("Demo", demo);

module.exports = Demo;