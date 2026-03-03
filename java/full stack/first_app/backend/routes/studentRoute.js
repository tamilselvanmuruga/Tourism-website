const StudentSchema=require("../model/studentDetails");

exports.Signup=async(req,res)=>{

    try{
        const {username,email,password,mobileno}=req.body;
        const user=await StudentSchema.findOne({email})
        if(user)
        {
            res.status(400).json({msg:"user already exist"})
        }
        else{
            StudentSchema.create({username,email,password,mobileno})
            res.status(201).json({msg:"user added successfully",data:{username,email,password,mobileno}})
        }
    }
    catch(err)
    {
        res.status(400).json({msg:"something went wrong",err:{err}})
    }
}