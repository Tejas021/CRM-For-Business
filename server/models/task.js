const mongoose = require("mongoose")

const { Schema } = mongoose

const TaskSchema = new Schema({
    title: { required: true, type: String },
    description: { required: true, type: String },
    hours: { required: true, type: String },
    assignedBy: { type: String  },
    assignedTo: { type: String },
    comments: { type: Array },
    budget : {type:Number,default:0},
    status : {type:String,default:'unAttended'}
}, { timestamps: true })

const Task = mongoose.model("Tasks", TaskSchema)

module.exports = Task;