const TaskModel = require("../Models/TaskModel");

const Createtask = (async (req, res) => {
    const data = req.body;
    try {
        const model = new TaskModel(data);

        await model.save();
        res.status(200).json({
            message: "Task Is Createed",
            success: true,
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to create a task ',
            success: false,
        })
    }
})

const fetchAllTask = (async (req, res) => {
    try {
        const data = await TaskModel.find({});


        res.status(200).json({
            message: "All Task",
            success: true,
            data
        })
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to fetch the task',
            success: false,
        })
    }
})

const updateTask = (async (req, res) => {
    try {

        const id = req.params.id;
        const body = req.body;
        const obj = { $set: { ...body } }
        await TaskModel.findByIdAndUpdate(id, obj)


        res.status(200).json({
            message: "Task updated",
            success: true,

        })
    }
    catch (err) {
        res.status(500).json({
            message: 'failed to Update  the task',
            success: false,
        })
    }
})

const deleteTask = (async (req, res) => {
    try {
        const id = req.params.id;

        await TaskModel.findByIdAndDelete(id)

        res.status(200).json({
            message: "Task is Deleted",
            success: true,
        })
    }
    catch (err) {
        console.error(err)
        res.status(500).json({
            message: 'failed to delete the task',
            success: false,
        })
    }
})


module.exports = { Createtask, fetchAllTask, updateTask, deleteTask }