const taskModel = require('../model/task-model');

const getAllTasks = async () => {
    return await taskModel.findAll();
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
    updateTaskState
}