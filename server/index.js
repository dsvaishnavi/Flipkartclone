import express from "express";
import Connection from "./databases/db.js";
import dotenv from "dotenv";
import Defaultdata from "./default.js";
import Router from "./routes/routes.js";

const app = express();

dotenv.config();

app.use('/',Router)

const port = 3000;

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

Connection(USERNAME, PASSWORD);
app.listen(port, () => {
  console.log(`welcome to ${port}`);
});

Defaultdata();
