const { Model, DataTypes } = require('sequelize');

class Feature extends Model {
    static init(connection) {
        super.init({
            color: DataTypes.STRING,
            geometry: DataTypes.GEOMETRY
        }, {
            sequelize: connection
        })
    }
}

module.exports = Feature;