const { Router } = require('express');
const { getAllTasks } = require('../controller/task-controller');

const router = Router();

router.get('/', async (_req, res) => {
    const data = await getAllTasks();
    res.render('template', {
        title: 'Task App',
        page: 'index',
        showCreateBtn: true,
        payload: data
    });
});

router.get('/create-task', (_req, res) => {
    res.render('template', {
        title: 'Create Task',
        page: 'create-task',
        showCreateBtn: false
    });
});

router.get('/testing', (_req, res) => {
    res.send({ testing: true });
});

module.exports = router;