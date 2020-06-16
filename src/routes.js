const express = require('express');
const UserController = require('./controllers/UserController');
const AdressesController = require('./controllers/AdressesController');

const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.post('/users/:user_id/adresses', AdressesController.store);

module.exports = routes;