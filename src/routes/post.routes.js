const express = require('express');
const route = express.Router();
const postControllers = require('../controllers/post.controllers');

route.post('/create', postControllers.create);
route.get('/read/:user_id', postControllers.read);

module.exports = route;