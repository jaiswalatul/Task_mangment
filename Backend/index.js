const express=require('express')
const app=express()
const cors=require('cors')
require('dotenv').config();
require('./Models/db')
app.use(cors());
const TaskRouter=require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const PORT=process.env.PORT||8080

app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
})
app.use(bodyParser.json())
app.use('/tasks',TaskRouter)

app.get('/',(req,res)=>{
    res.send("Hello from the Server ")
})