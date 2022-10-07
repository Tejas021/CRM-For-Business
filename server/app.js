const { json } = require("express");
const express = require("express");
const cors = require("cors")
const app = express()
const mongoose = require("mongoose")
const authRoutes = require("./routes/authRoutes")
const taskRoutes = require('./routes/task')
const ticketRoutes = require("./routes/ticketRoutes")
const userRoutes = require("./routes/userRoutes")
require("dotenv").config()

const corsConfig = {
    origin: "*",
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(json())

app.use(cors(corsConfig));


mongoose.connect(process.env.MONGO_DB).then(() => {
    app.listen(3000, () => {
        console.log("connected")
    })
})
app.use("/api/auth/", authRoutes);
app.use('/api/task/', taskRoutes);
app.use("/api/ticket/", ticketRoutes)
app.use("/api/user/",userRoutes)

app.get("/", (req, res) => {
    console.log("called")
})

