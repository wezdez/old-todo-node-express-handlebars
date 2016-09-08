var express = require('express');
var router = express.Router();
var controller = require('../controllers/main');

router.get('/', controller.index);
router.get('/about', controller.about);
router.get('/contact', controller.contact);
router.get('/images/:num', controller.images);
router.post('/process', controller.process); //new project
router.get('/tasks/:id', controller.tasks);
router.put('/editTask/:id', controller.editTask);
router.delete('/deleteTask/:id', controller.deleteTask);
router.post('/newTask/:project_id', controller.newTask);
router.delete('/deleteProject/:id', controller.deleteProject);

module.exports = router;


