const mongoose = require("mongoose")

const Schema = mongoose.Schema

const TicketSchema = new Schema({
    assignedBy: { required: true, type: String }
    , budget: { required: true, type: String }
    , time: { required: true, type: String }
    , title : {type:String, required: true }
    , description : {type:String, required: true }
    , comments : {type:Array}

}, { timestamps: true })

const Ticket = mongoose.model("Tickets", TicketSchema)

module.exports = Ticket;