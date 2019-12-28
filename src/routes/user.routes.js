const express = require('express');
const route = express.Router();
const userControllers = require('../controllers/user.controllers');

route.post('/signin', userControllers.create);
route.get('/read', userControllers.read);

module.exports = route;