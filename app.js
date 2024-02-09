const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userrouter=require("./controller/userrouter")
const postrouter=require("./controller/postrouter")

const app=express()


app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://amalanil:Amal5512@cluster0.ucdgacu.mongodb.net/blogappdb?retryWrites=true&w=majority",
{useNewUrlParser:true}

)

app.use("/api/post",postrouter)
app.use("/api",userrouter)

app.listen(3008,()=>{
    console.log("server is running")
})