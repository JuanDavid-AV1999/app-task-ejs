const { Router } = require('express');
const {
    tasksView,
    createTaskView,
    updateTaskView,
    updateTaskState,
    createNewTask,
    updateTask,
    deleteTask,
} = require('../controller/task.controller');

const router = Router();

router.get('/', tasksView);
router.get('/create-task', createTaskView);
router.get('/update-task/:id', updateTaskView);
router.post('/create-task', createNewTask);
router.post('/check-task', updateTaskState);
router.put('/update-task', updateTask);
router.delete('/delete-task', deleteTask);

module.exports = router;
