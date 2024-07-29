import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import ProductRoute from "./routes/ProductRoute.js"
dotenv.config();

const app = express();
const port = process.env.APP_PORT;

app.use(cors());
app.use(express.json());
app.use(ProductRoute);

app.listen(port,()=>{
    console.log(`Server up and running on ${port}`)
});