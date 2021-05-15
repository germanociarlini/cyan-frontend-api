const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const Collection = require('../models/Collection');
const Feature = require('../models/Feature');

const connection = new Sequelize(dbConfig);

Collection.init(connection);
Feature.init(connection);

Feature.associate(connection.models);

module.exports = connection;