const express = require('express');
const CollectionController = require('./controllers/CollectionController');
const FeatureController = require('./controllers/FeatureController');

const routes = express.Router();

routes.get('/collections', CollectionController.index);
routes.post('/collections', CollectionController.store);

routes.get('/collections/:collection_id/features', FeatureController.index);
routes.post('/collections/:collection_id/features', FeatureController.store);

module.exports = routes;