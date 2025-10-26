import express from "express";
import dotenv from "dotenv"

dotenv.config({quiet:true})

const HTTP = process.env.HTTP_SERVER || 3000

const app = express();

app.listen(HTTP, () => {
    console.log('Iniciando Server...');
})
