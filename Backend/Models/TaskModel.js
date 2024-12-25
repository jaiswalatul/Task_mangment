const mongoose=require('mongoose')
const Schema=mongoose.Schema

const Task_Schema=new mongoose.Schema({
    taskName:{
        type:String,
        required:true,
    },

    isDone:{
        type:Boolean,
        required:true,
    },
})

const TaskModel=mongoose.model('TaskModel',Task_Schema)
module.exports=TaskModel;