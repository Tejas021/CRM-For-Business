const mongoose = require("mongoose")

const { Schema } = mongoose

const TaskSchema = new Schema({
    title: { required: true, type: String },
    description: { required: true, type: String },
    hours: { required: true, type: Number },
    assignedBy: { type: Schema.Types.ObjectId, ref: 'User' },
    assingedTo: { type: Schema.Types.ObjectId, ref: 'User' },
    comments: { type: Array },
    budget : {type:String},
    status : {type:String,default:'unAttended'}
}, { timestamps: true })

const Task = mongoose.model("Tasks", TaskSchema)

module.exports = Task;