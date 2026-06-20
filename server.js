import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {connect} from "./DB.js";

const app = express();


dotenv.config();
connect();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend funzionante!");
});



app.listen(process.env.PORT, () => {
  console.log("Server collegato");
});