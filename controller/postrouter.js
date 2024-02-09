const express=require("express")
const router=express.Router()
const postmodel=require("../models/postmodel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new postmodel(data)
    let result=await post.save()
    res.json({
        status:"success"
    })
    
})

router.get("/viewall",async(req,res)=>{
    let result=await postmodel.find()
    .populate("userId","name age mobno pincode -_id")
    .exec()
    res.json(result)

})
module.exports=router