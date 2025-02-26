import express from 'express';
import studentRoutes from './studentRouter.js';

let route=express.Router();

route.use('/api/v1/student',studentRoutes);

export default route;

