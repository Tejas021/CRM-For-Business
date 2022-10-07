const router = require("express").Router()
const User = require('../models/User')

// router.post('/create', async (req, res) => {
//     const newUser = new User(req.body);
//     try {
//         const savedUser = await newUser.save();
//         res.status(200).send(savedUser)
//     } catch (err) {
//         res.status(500).send(err);
//     }

// })

router.delete("/deleteUser/:id", async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).send("User deletd successfully")
    } catch (err) {
        res.status(500).json(err)
    }

})

router.patch("/updateUser/:id", async (req, res) => {
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).send(updatedUser);
    } catch (err) {
        res.status(500).json(err)
    }
})

router.get("/getAllUsers",async(req,res)=>{
    try{
        const Users = await User.find();
        res.status(200).send(Users)
    } catch(err){
        res.status(500).json(err)
    }
})

router.get("/getUser/:id",async(req,res)=>{
    try{
       const User = await User.findById(req.params.id)
       res.status(200).send(User)
    } catch(err){
         res.status(500).json(err)
 }
 })

module.exports = router