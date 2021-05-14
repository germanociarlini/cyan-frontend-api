const Feature = require('../models/Feature');

module.exports = {
    async index(req, res) {
        const features = await Feature.findAll();
        return res.json(features);  
    },

    async store(req, res) {
        const { color, geometry } = req.body;
        const feature = await Feature.create({ color, geometry });
        return res.json(feature);
    }
}