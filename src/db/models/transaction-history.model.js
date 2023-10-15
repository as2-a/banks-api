const { Model, DataTypes } = require('sequelize');

const SBI_HISTORICO_TRANSACCIONES_TABLE = 'SBI_HISTORICO_TRANSACCIONES';

class TransactionHistory extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_HISTORICO_TRANSACCIONES_TABLE,
            modelName: 'TransactionHistory',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const TransactionHistorySchema = {
    HT_HISTORICO_TRANSACCIONES: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    HT_MONTO_ACTUAL_CUENTA: {
        type: DataTypes.DOUBLE
    },
    HT_MONTO_TRANSACCION: {
        type: DataTypes.DOUBLE
    },
    HT_NUEVO_MONTO_CUENTA: {
        type: DataTypes.DOUBLE
    },
    HT_TIPO_OPERACION: {
        type: DataTypes.STRING
    },
    HT_FECHA: {
        type: DataTypes.DATE
    },
    TRA_TRANSACCION: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'Transaction', 
            key: 'TRA_TRANSACCION'  
        }
    }
};

module.exports = { TransactionHistory, TransactionHistorySchema };
