const taskModel = require('../model/task-model');

const getAllTasks = async () => {
    return await taskModel.findAll();
}

const createNewTask = async (title, description) => {
    const date = new Date('Y-m-d H:m:s');
    console.log(date)
    // const newTask = {
    //     title, 
    //     description,
    //     state: 'P',
    //     create_at: date.getDate(),
    //     update_at: ''
    // }
    // const insert = await taskModel.create(newTask);
    return true;
}

const updateTaskState = async (id, beforeState) => {
    const state = beforeState === 'P' ? 'C' : 'P';
    await taskModel.update({ state }, {
        where: { rowid: id }
    });
    
    return state;
}

module.exports = {
    getAllTasks, 
    updateTaskState,
    createNewTask
}