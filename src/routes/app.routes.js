const { Router } = require('express');

const router = Router();

router.get('/', (_req, res) => {
    res.render('template', {
        title: 'Task App',
        page: 'index'
    });
});

router.get('/create-task', (_req, res) => {
    res.render('template', {
        title: 'Create Task',
        page: 'create-task'
    });
});

router.get('/testing', (req, res) => {
    res.send({ testing: true });
});

module.exports = router;