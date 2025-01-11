import express from "express";
import Connection from "./databases/db.js";
const app= express();


const port=3000;

Connection();
app.listen( port,()=>{
    console.log(`welcome to ${port}`)
})