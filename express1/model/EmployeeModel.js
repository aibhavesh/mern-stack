require("../connection/conn")
const routes = require('express').Router();
let mongoose = require("mongoose");
let EmpSchema = mongoose.Schema({
    name: String  
})
let Emp = mongoose.model("meet", EmpSchema)

module.exports = Emp;