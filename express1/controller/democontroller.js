const routes = require('express').Router();
const Demo = require("../model/DemoModel")



routes.get("/", async(req, res) => {
    let result = await Demo.find();
    console.log(result);
    res.send("Demo Controller is working fine");
});
module.exports = routes;