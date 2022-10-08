const mongoose = require("mongoose")

const Schema = mongoose.Schema

<<<<<<< HEAD
const userShema =new Schema({
    username:{required:true,unique:true,type:String}
    ,email:{required:true,unique:true,type:String}
    ,password:{required:true,type:String}
    ,isAdmin:{required:true,type:Boolean,default:false}  
    ,role:{required:true,type:String,default:"client"}
    ,credit:{type:Number,default:3000}

},{timestamps:true})
=======
const userShema = new Schema({
    username: { required: true, unique: true, type: String }
    , email: { required: true, unique: true, type: String }
    , password: { required: true, type: String }
    , isAdmin: {
        required: true, type: Boolean, default: false
    }
    , role: { required: true, type: String, default: "client" }
    , work : {type:Number,default:0}
}, { timestamps: true })

const User = mongoose.model("User", userShema)
>>>>>>> b86b38c7256f0b3ff33a7e09e59184cad55f4253

module.exports = User;