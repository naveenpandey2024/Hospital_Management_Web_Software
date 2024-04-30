import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import fileUpload from "express-fileupload";
import messageRouter from "./router/messageRouter.js";
import{errorMiddleware} from './middlewares/errorMiddleware.js'
import userRouter from "./router/userRouter.js"
import appointmentRouter from "./router/appointmentRouter.js";
const app = express();
config({ path: "./config/config.env" });
dbConnection();

const corsOptions = {
  // origin: ['http://localhost:5173','http://localhost:5174'], // Allow requests from this origin
   //origin: ['https://hms-frontend-de3n.onrender.com','https://hms-dashboard.onrender.com'],
  origin: [process.env.FRONTEND_URL,process.env.DASHBOARD_URL],
  credentials: true, // Allow sending cookies from the frontend
}

app.use((req, res, next) => {
  // const allowedOrigins = ['http://localhost:5173', 'http://localhost:5174'];
  const allowedOrigins = [process.env.FRONTEND_URL,process.env.DASHBOARD_URL];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);


app.use(errorMiddleware);
export default app;