const router = require("express").Router()
const Ticket = require('../models/Tickets')

router.post('/createTicket', async (req, res) => {
    const newTicket = new Ticket(req.body);
    try {
        const savedTicket = await newTicket.save();
        res.status(200).send(savedTicket)
    } catch (err) {
        res.status(500).send(err);
    }

})

router.delete("/deleteticket/:id", async (req, res) => {
    try {
        const deleteTicket = await Ticket.findByIdAndDelete(req.params.id)
        res.status(200).send("Ticket deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.patch("/updateTicket/:id", async (req, res) => {
    try {
        const updatedTicket = await Ticket.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedTicket);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/getAllTickets",async(req,res)=>{
    try{
        const tickets = await Ticket.find();
        res.status(200).send(tickets)
    } catch(err){
        res.status(500).json(err)
    }
})

router.get("/getTicket/:id",async(req,res)=>{
    try{
       const ticket = await Ticket.findById(req.params.id)
       res.status(200).send(ticket)
    } catch(err){
         res.status(500).json(err)
 }
 })

module.exports = router