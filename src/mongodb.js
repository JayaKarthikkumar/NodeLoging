const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/login")
.then(()=>{
     console.log("mongodb connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const LogInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


const LogInCollection=new mongoose.model('LogInCollection',logInSchema)

module.exports=LogInCollection