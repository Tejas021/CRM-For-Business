const router = require("express").Router()
const Task = require("../models/task")

router.post('/create-task', async (req, res) => {

    const { title, description, hours } = req.body;
    const newTask = new Task({
        title,
        description,
        hours
    })
    console.log("newTask", newTask);
    try {
        const savedTask = await newTask.save();
        return res.json(savedTask);
    } catch (error) {
        return res.json({ "error": error })
    }

})

router.delete("/deleteTask/:id", async (req, res) => {
    try {
        const deleteTask = await Task.findByIdAndDelete(req.params.id)
        res.status(200).send("Task deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.patch("/updateTask/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedTask);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/getAllTask",async(req,res)=>{
    try{
        const task = await Ticket.find();
        res.status(200).send(task)
    } catch(err){
        res.status(500).json(err)
    }
})

router.get("/getTask/:id",async(req,res)=>{
    try{
       const task = await Task.findById(req.params.id)
       res.status(200).send(task)
    } catch(err){
         res.status(500).json(err)
 }
 })

module.exports = router