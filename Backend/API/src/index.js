import express from "express";
import cors from 'cors';
import { router } from "./routes/ScheduleRoute.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use((response, request, next) => { 
  next();
});

app.use("/api", router);

app.listen(3000, () => {
  console.log("Server Running on PORT 3000");
});

