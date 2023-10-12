const { Model, DataTypes } = require('sequelize');

const SBI_TIPO_TRANSACCION_TABLE = 'SBI_TIPO_TRANSACCION';

class TransactionType extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_TIPO_TRANSACCION_TABLE,
            modelName: 'TransactionType',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const TransactionTypeSchema = {
    TTR_TIPO_TRANSACCION: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    TTR_DESCRIPCION: {
        type: DataTypes.STRING(100)
    },
    ttr_factor_operacion: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
};

module.exports = { TransactionType, TransactionTypeSchema };
