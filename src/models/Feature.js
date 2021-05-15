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

    static associate(models) {
        this.belongsTo(models.Collection, {
            foreignKey: 'collection_id',
            as: 'owner'
        })
    }
}

module.exports = Feature;