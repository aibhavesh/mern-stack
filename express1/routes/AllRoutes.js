const routes = require('express').Router();

routes.use("/api/v1/demo", require("../controller/democontroller"));
routes.use("/api/v1/employee", require("../controller/EmployeeController"));

module.exports = routes;