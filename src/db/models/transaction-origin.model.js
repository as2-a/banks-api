const { Model, DataTypes } = require('sequelize');

const SBI_ORIGEN_TRANSACCION_TABLE = 'SBI_ORIGEN_TRANSACCION';

class TransactionOrigin extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_ORIGEN_TRANSACCION_TABLE,
            modelName: 'TransactionOrigin',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const TransactionOriginSchema = {
    OTR_ORIGEN_TRANSACCION: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    OTR_DESCRIPCION: {
        type: DataTypes.STRING(100)
    }
};

module.exports = { TransactionOrigin, TransactionOriginSchema };
