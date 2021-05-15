const express = require('express');
const CollectionController = require('./controllers/CollectionController');
const FeatureController = require('./controllers/FeatureController');

const routes = express.Router();

routes.post('/collections', CollectionController.store);

routes.post('/collections/:collection_id/features', FeatureController.store);
// routes.post('/feature-collections/:collection_id/features', FeatureController.index);

module.exports = routes;