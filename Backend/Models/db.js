const mongoose=require("mongoose");

const DB_URL=process.env.DB_URL;

mongoose.connect(DB_URL)
.then(()=>{
    console.log("MONGODB CONNECTION SUCCESFULL")
})
.catch((err)=>{
    console.log(err)
})