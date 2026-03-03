const mongoose = require("mongoose")
const StudentSchema=new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    mobileno:{type:Number,required:true}
})
const model=mongoose.model("IT",StudentSchema)
module.exports=model;