const { Model, DataTypes } = require('sequelize');

const SBI_MONEDA_TABLE = 'SBI_MONEDA';

class Currency extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_MONEDA_TABLE,
            modelName: 'Currency',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const CurrencySchema = {
    MND_MONEDA: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    MND_DESCRIPCION: {
        type: DataTypes.STRING(15)
    },
    MND_ABREVIATURA: {
        type: DataTypes.STRING(5)
    }
};

module.exports = { Currency, CurrencySchema };
