const express = require('express');
const route = express.Router();
const userControllers = require('../controllers/user.controllers');

route.post('/signup', userControllers.signup);
route.post('/signin', userControllers.signin);

module.exports = route;