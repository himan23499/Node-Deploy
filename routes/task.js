const task = require('../controller/task');
const express = require('express');
const taskRouter = express.Router();


taskRouter
.get('/task',task.getAllTask)
.post('/task',task.createTask)
.get('/task/:id',task.getTask)
.put('/task/:id',task.updateTask)
.patch('/task/:id',task.replaceTask)
.delete('/task/:id',task.deleteTask)

exports.taskRouter = taskRouter