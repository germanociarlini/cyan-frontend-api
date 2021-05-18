const Collection = require("../models/Collection");

module.exports = {
  async index(req, res) {
    const features = await Collection.findAll();
    return res.json(features);
  },

  async upsert(req, res) {
    const { collection_id } = req.params;
    const { name } = req.body;

    if (!collection_id) {
      // Create
      const collection = await Collection.create({ name });
      return res.json(collection);
    } else {
      const existingCollection = await Collection.findOne({
        where: {
          id: collection_id,
        },
      });
      if (!existingCollection) {
        return res.status(400).json({ error: "Collection not found" });
      } else {
        // Update
        existingCollection.name = name;
        await existingCollection.save();
        return res.json(existingCollection);
      }
    }
  }
};
