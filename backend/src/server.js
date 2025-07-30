import express from "express";
import dotenv from "dotenv";
import { jobSearch } from "./controllers/jobSearch.controller.js";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/jobs", jobSearch);

app.listen(PORT, () => {
  console.log("App running on localhost:", PORT);
});
