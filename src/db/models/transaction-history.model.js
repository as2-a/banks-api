const { Model, DataTypes } = require('sequelize');

const VIEW_TRANSACTION_HISTORY_TABLE = 'view_transaction_history';

class ViewTransactionHistory extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: VIEW_TRANSACTION_HISTORY_TABLE,
            modelName: 'ViewTransactionHistory',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const ViewTransactionHistorySchema = {
    dbid: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER
    },
    descripcion: {
        type: DataTypes.STRING(100)
    },
    monto_actual: {
        type: DataTypes.DOUBLE
    },
    origen: {
        type: DataTypes.STRING(100)
    },
    tipo_documento: {
        type: DataTypes.STRING(100)
    },
    documento: {
        type: DataTypes.STRING(100)
    },
    monto_transaccion: {
        type: DataTypes.DOUBLE
    },
    nuevo_monto: {
        type: DataTypes.DOUBLE
    },
    tipo_operacion: {
        type: DataTypes.STRING(4)
    },
    fecha: {
        type: DataTypes.DATE
    },
    cuenta: {
        type: DataTypes.INTEGER
    },
};

module.exports = { ViewTransactionHistory, ViewTransactionHistorySchema };
