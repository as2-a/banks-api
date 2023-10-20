const { Model, DataTypes } = require('sequelize');

const SBI_BANCO_TABLE = 'SBI_BANCO';

class Banks extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_BANCO_TABLE,
            modelName: 'Banks',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const BanksSchema = {
    BNC_BANCO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    BNC_NOMBRE: {
        type: DataTypes.STRING(50)
    },
    BNC_DIRECCION: {
        type: DataTypes.STRING(100)
    },
    BNC_TELEFONO: {
        type: DataTypes.INTEGER
    },
    BNC_CORREO: {
        type: DataTypes.STRING(50)
    },
    BNC_IMAGEN: {
        type: DataTypes.STRING(25), 
    },
    bnc_tasa_cambio: {
        type: DataTypes.DOUBLE
    }
};

module.exports = { Banks, BanksSchema };
