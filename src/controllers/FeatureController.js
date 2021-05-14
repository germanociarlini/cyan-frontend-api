const Feature = require('../models/Feature');

module.exports = {
    async store(req, res) {
        const { color, geometry } = req.body;
        const feature = await Feature.create({ color, geometry });
        return res.json(feature);
    }
}