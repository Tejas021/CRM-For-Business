const { json } = require("express");
const express = require("express");
const app = express()
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
require("dotenv").config()

app.use(json())

mongoose.connect(process.env.MONGO_DB).then(()=>{
    app.listen(3000,()=>{
        console.log("connected")
    })
})
app.use("/api/auth/",authRoutes)

app.get("/",(req,res)=>{
console.log("called")
})

