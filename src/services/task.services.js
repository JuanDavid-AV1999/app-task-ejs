const taskModel = require('../model/task.model');

const get = async (id = '') => {
    return id ? await taskModel.findByPk(id) : await taskModel.findAll();
}

const insert = async (title, description, create_at) => {
    return await taskModel.create({ title, description, create_at, state: 'P' });
}

const updateState = async (id, currentState) => {
    const state = currentState === 'P' ? 'C' : 'P';
    await taskModel.update({ state }, { where: { rowid: id } });
    return state;
}

const update = async (id, title, description) => {
    return await taskModel.update({ title, description }, { where: { rowid: id } });
}

const deleted = async (id) => {
    return await taskModel.destroy({ where: { rowid: id } });
}

module.exports = {
    get,
    insert,
    update,
    updateState,
    deleted
}