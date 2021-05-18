const express = require("express");
const CollectionController = require("./controllers/CollectionController");
const FeatureController = require("./controllers/FeatureController");

const routes = express.Router();

routes.get("/collections", CollectionController.index);
routes.put("/collections", CollectionController.upsert);
routes.put("/collections/:collection_id", CollectionController.upsert);

routes.get("/collections/:collection_id/features", FeatureController.index);
routes.post("/collections/:collection_id/features", FeatureController.store);
routes.put("/collections/:collection_id/features", FeatureController.overwrite);

module.exports = routes;
