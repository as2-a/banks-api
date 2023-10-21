const { Model, DataTypes } = require('sequelize');

const SBI_TRANSACCION_TABLE = 'SBI_TRANSACCION';

class Transaction extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_TRANSACCION_TABLE,
            modelName: 'Transaction',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const TransactionSchema = {
    TRA_TRANSACCION: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    TRA_NUMERO_DOCUMENTO: {
        type: DataTypes.STRING(100)
    },
    TRA_DESCRIPCION: {
        type: DataTypes.STRING(100)
    },
    TTR_TIPO_TRANSACCION: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'TransactionType',
            key: 'TTR_TIPO_TRANSACCION'
        }
    },
    OTR_ORIGEN_TRANSACCION: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'TransactionOrigin',
            key: 'OTR_ORIGEN_TRANSACCION'
        }
    },
    TDO_TIPO_DOCUMENTO: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'DocumentType',
            key: 'TDO_TIPO_DOCUMENTO'
        }
    },
    TRA_MONTO: {
        type: DataTypes.DOUBLE
    },
    TRA_FECHA: {
        type: DataTypes.DATE
    },
    CNT_CUENTA: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Accounts',
            key: 'CNT_CUENTA'
        }
    },
    CON_CONCILIACION: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Conciliation',
            key: 'CON_CONCILIACION'
        }
    },
    ed_estado_documento: {
        type: DataTypes.INTEGER,
        references: {
            model: 'DocumentState',
            key: 'ed_estado_documento'
        }
        
    },
    tra_monto_actual_cuenta: {
        type: DataTypes.DOUBLE
    },
};

module.exports = { Transaction, TransactionSchema };
