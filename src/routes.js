const express = require('express');
const FeatureController = require('./controllers/FeatureController');

const routes = express.Router();

routes.post('/features', FeatureController.store);
routes.get('/features', FeatureController.index);

module.exports = routes;