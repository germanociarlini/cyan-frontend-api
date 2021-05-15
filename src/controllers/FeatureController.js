const Collection = require('../models/Collection');
const Feature = require('../models/Feature');

module.exports = {
    async store(req, res) {
        const { collection_id } = req.params;
        const { color, geometry } = req.body;

        const collection = await Collection.findByPk(collection_id);

        if (!collection) {
            return res.status(400).json({ error: 'Collection not found' });
        } else {
            const feature = await Feature.create({ collection_id, color, geometry });
            return res.json(feature);
        }
    }
}