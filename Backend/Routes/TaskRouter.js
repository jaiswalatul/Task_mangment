const {Createtask,fetchAllTask,updateTask,deleteTask} = require('../Controllers/TaskController');

const router=require('express').Router();

router.get('/',fetchAllTask)

// To create a task  We need a post Method

router.post('/',Createtask)

// To Update a task  We need put Method

router.put('/:id',updateTask)

// To Delete a task  We need a delete Method

router.delete('/:id',deleteTask)
module.exports=router;