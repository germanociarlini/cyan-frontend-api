const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Feature = require('../models/Feature');

const connection = new Sequelize(dbConfig);

Feature.init(connection);

module.exports = connection;