import express from "express";
import Connection from "./databases/db.js";
import dotenv from "dotenv";
import Defaultdata from "./default.js";
import Router from "./routes/routes.js";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

const app = express();

dotenv.config();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", Router); //routing

const port = 3000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
app.listen(port, () => {
  console.log(`welcome to ${port}`);
});

Defaultdata();
