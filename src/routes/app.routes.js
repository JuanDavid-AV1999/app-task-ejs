const { Router } = require('express');
const { getAllTasks, updateTaskState, createNewTask } = require('../controller/task-controller');

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

router.post('/create-task', async (req, res) => {
    const { title, description} = req.body;
    console.log(title, description)
    const t = await createNewTask(title, description);
    res.status(200).json({ code: 200, error: false, payload: t });
});

router.post('/check-task', async (req, res) => {
    const { id, state } = req.body;
    const data = await updateTaskState(id, state);

    res.status(200).send(JSON.stringify({ code: 200, error: false, payload: data }));
});

module.exports = router;