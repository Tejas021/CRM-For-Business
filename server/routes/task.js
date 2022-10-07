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

module.exports = router