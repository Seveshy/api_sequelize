const express = require('express');

const UserController = require('./controllers/UserController');
const AdressesController = require('./controllers/AdressesController');
const TechController = require('./controllers/TechController');


const routes = express.Router();

routes.get('/users', UserController.index);
routes.post('/users', UserController.store);

routes.get('/users/:user_id/adresses', AdressesController.index);
routes.post('/users/:user_id/adresses', AdressesController.store);

routes.get('/users/:user_id/techs', TechController.index);
routes.post('/users/:user_id/techs', TechController.store);
routes.delete('/users/:user_id/techs', TechController.delete);

module.exports = routes;