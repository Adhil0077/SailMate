import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import userRoute from "./router/userRoute.js";
import { notFound,errorHandler } from "./Middleware/errorMiddleware.js";
import connectDB from "./config/db.js";



dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

connectDB()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use('/api/users',userRoute)
app.get('/',(req,res)=>res.send("server started"))

app.use(notFound)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`server has started on ${port}`);
});
 