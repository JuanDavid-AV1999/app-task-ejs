const { getDateFormat } = require('../helpers');
const { get, updateState, insert, update, deleted } = require('../services/task.services');

const tasksView = async (_req, res) => {
    const payload = await get();
    res.render('template', {
        title: 'Express task app',
        page: 'tasks',
        action: 'load',
        script: 'main',
        payload,
    });
};

const createTaskView = (_req, res) => {
    res.render('template', {
        title: 'Create task',
        page: 'task-actions',
        action: 'create',
        script: 'action',
    });
};

const updateTaskView = async (req, res) => {
    const { id } = req.params;
    const payload = await get(id);
    res.render('template', {
        title: 'Updated task',
        page: 'task-actions',
        action: 'update',
        script: 'action',
        payload,
    });
};

const createNewTask = async (req, res) => {
    const { title, description } = req.body;
    const date = getDateFormat();
    await insert(title, description, date);
    res.status(200).json({ code: 200, error: false });
};

const updateTask = async (req, res) => {
    const { id, title, description } = req.body;
    await update(id, title, description);
    res.status(200).json({ code: 200, error: false });
};

const updateTaskState = async (req, res) => {
    const { id, state } = req.body;
    const payload = await updateState(id, state);
    res.status(200).json({ code: 200, error: false, payload });
};

const deleteTask = async (req, res) => {
    const { id } = req.body;
    console.log(id)
    await deleted(id);
    res.status(200).json({ code: 200, error: false });
}

module.exports = {
    tasksView,
    createTaskView,
    updateTaskView,
    updateTaskState,
    createNewTask,
    updateTask,
    deleteTask,
};
