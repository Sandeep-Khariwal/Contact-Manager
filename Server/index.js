const express = require("express");
const cors = require("cors")
const connection = require("./Database/Connection")
const Router = require("./routes/routes.js")

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

connection();

app.use("/",Router);
const PORT=4000

app.listen(PORT,(req,resp)=>{
    console.log(`your server is running on ${PORT}`)
})