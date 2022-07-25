const taskModel = require('../model/task-model');

const getAllTasks = async () => {
    return  await taskModel.findAll();
}

module.exports = {
    getAllTasks
}