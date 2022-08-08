const { Router } = require('express');
const { getAllTasks, updateTaskState } = require('../controller/task-controller');

const router = Router();

router.get('/', async (_req, res) => {
    const data = await getAllTasks();
    res.render('template', {
        title: 'Express task app',
        page: 'index',
        showBtn: 'created',
        payload: data
    });
});

router.get('/create-task', (_req, res) => {
    res.render('template', {
        title: 'Create task',
        page: 'create-task',
        showBtn: 'close'
    });
});

router.post('/check-task', async (req, res) => {
    const { id, state } = req.body;
    const data = await updateTaskState(id, state);

    res.status(200).send(JSON.stringify({ code: 200, error: false, payload: data }));
});

module.exports = router;