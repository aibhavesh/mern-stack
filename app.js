import express from 'express';
import allRoutes from './routes/allroutes.js';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : true}))

app.use(allRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
