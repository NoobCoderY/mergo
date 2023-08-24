import express from "express"
import dotenv from "dotenv"
import blogRouter from "./routes/blog.js"
import userRouter from "./routes/user.js"
import { errorMiddlewares } from "./middleware/error.js";


const app = express();


//  env file import 
dotenv.config({
    path: "./config/config.env",
});
  




app.use("/ap1/v1", blogRouter)
app.use("/ap1/v1",userRouter)



app.use(errorMiddlewares)

export default app;