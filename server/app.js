const { json } = require("express");
const express = require("express");
const cors  = require("cors")
const app = express()
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
require("dotenv").config()

const corsConfig={
    origin: "http://127.0.0.1:5173",
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(json())

app.use(cors(corsConfig));


mongoose.connect(process.env.MONGO_DB).then(()=>{
    app.listen(3000,()=>{
        console.log("connected")
    })
})
app.use("/api/auth/",authRoutes)

app.get("/",(req,res)=>{
console.log("called")
})

