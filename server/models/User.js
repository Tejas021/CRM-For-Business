const mongoose = require("mongoose")

const Schema = mongoose.Schema

const userShema =new Schema({
    username:{required:true,unique:true,type:String}
    ,email:{required:true,unique:true,type:String}
    ,password:{required:true,type:String}
    ,isAdmin:{required:true,type:Boolean,default:false
    ,role:{required:true,type:String}
    }
},{timestamps:true})

const User = mongoose.model("User",userShema)

module.exports=User;