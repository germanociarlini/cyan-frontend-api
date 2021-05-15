const { Model, DataTypes } = require('sequelize');

class Collection extends Model {
    static init(connection) {
        super.init({
            name: DataTypes.STRING
        }, {
            sequelize: connection
        })
    }
}

module.exports = Collection;