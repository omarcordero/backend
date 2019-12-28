const express = require('express');
const route = express.Router();
const userControllers = require('../controllers/user.controllers');

route.post('/signin', userControllers.create);

module.exports = route;