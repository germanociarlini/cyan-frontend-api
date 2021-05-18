const Collection = require("../models/Collection");
const Feature = require("../models/Feature");

module.exports = {
  async store(req, res) {
    const { collection_id } = req.params;
    const { properties } = req.body;

    const collection = await Collection.findByPk(collection_id);

    if (!collection) {
      return res.status(400).json({ error: "Collection not found" });
    } else {
      const feature = await Feature.create({ collection_id, properties, geometry });
      return res.json(feature);
    }
  },

  async overwrite(req, res) {
    const { collection_id } = req.params;
    const features = req.body; // {color, geometry} array

    const collection = await Collection.findByPk(collection_id);

    if (!collection) {
      return res.status(400).json({ error: "Collection not found" });
    } else {
      await Feature.destroy({
        where: {
          collection_id: collection_id,
        },
      });
      const mappedFeatures = features.map((feature) => {
        return {
          collection_id: collection_id,
          properties: feature.properties,
          geometry: feature.geometry,
        };
      });
      const allCollectionFeatures = await Feature.bulkCreate(mappedFeatures);
      return res.json(allCollectionFeatures);
    }
  },

  async index(req, res) {
    const { collection_id } = req.params;

    const collection = await Collection.findByPk(collection_id, {
      include: {
        association: "features",
      },
    });

    if (!collection) {
      return res.status(400).json({ error: "Collection not found" });
    } else {
      return res.json(collection.features);
    }
  },
};
