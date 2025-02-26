import express from 'express';
import {fetchStudents, createStudent, removeStudent, updateStudent} from '../controllers/studentController.js'; 


const routes = express.Router();

routes.get("/", fetchStudents);
routes.post("/", createStudent);
routes.get("/", removeStudent);
routes.put("/", updateStudent);

export default routes;
