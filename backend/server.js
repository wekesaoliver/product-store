import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import path from "path";


import productRoutes from "./routes/product.route.js"

dotenv.config();

const app = express();
const port = process.env.PORT || 5000

const __dirname = path.resolve();

app.use(express.json()); //allows us to accept JSON data in the body

app.use("/api/products", productRoutes);

// deployment process
if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname, "/frontend/dist")));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
    })
}

app.listen(port, ()=>{
    connectDB();
    console.log(`Server started at http://localhost:${port} hello world`);
})

//jPhRKH8aCbsIjrNh