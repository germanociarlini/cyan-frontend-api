const Collection = require("../models/Collection");

module.exports = {
  async index(req, res) {
    const features = await Collection.findAll();
    return res.json(features);
  },

  async store(req, res) {
    const { name } = req.body;
    const collection = await Collection.create({ name });
    return res.json(collection);
  },

  async update(req, res) {
      const { collection_id } = req.params;
      const { name } = req.body;
      const collection = await Collection.findOne({where: {
        id: collection_id
      }});

      if (!collection) {
        return res.status(400).json({ error: "Collection not found" });
      } else {
        collection.name = name;
        await collection.save();
        return res.json(collection);
      }
  }
};
