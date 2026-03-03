const express=require("express")
const mongoose=require("mongoose")
const app=express()
const Route=require("./routes/studentRoute")
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/JP")
.then(()=>console.log("success"))
.catch((err)=>console.log(err))
app.listen (5000,()=>(
    console.log("server is running in tha port 5000")
));
app.post("/Signup",Route.Signup);