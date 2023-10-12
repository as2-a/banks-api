const { Model, DataTypes } = require('sequelize');

const SBI_CONCILIACION_TABLE = 'SBI_CONCILIACION';

class Conciliation extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_CONCILIACION_TABLE,
            modelName: 'Conciliation',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const ConciliationSchema = {
    CON_CONCILIACION: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    CON_FECHA: {
        type: DataTypes.DATE
    },
    CON_INGRESOS_BANCO: {
        type: DataTypes.DOUBLE
    },
    CON_EGRESOS_BANCO: {
        type: DataTypes.DOUBLE
    },
    CON_INGRESOS_SISTEMA: {
        type: DataTypes.DOUBLE
    },
    CON_EGRESOS_SISTEMA: {
        type: DataTypes.DOUBLE
    },
    CON_DIFERENCIA: {
        type: DataTypes.DOUBLE
    }
};

module.exports = { Conciliation, ConciliationSchema };
