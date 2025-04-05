import express from 'express';
import AllRoutes from './routes/AllRoutes.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const port = process.env.PORT  || 3000;
app.use(AllRoutes);
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;