const { Model, DataTypes } = require('sequelize');

class Collection extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }

    static associate(models) {
        this.hasMany(models.Feature, { foreignKey: 'collection_id', as: 'features' });
    }
}

module.exports = Collection;