const { Model, DataTypes } = require('sequelize');

const SBI_CAMPOS_ADICIONALES_TABLE = 'SBI_CAMPOS_ADICIONALES';

class AdditionalFields extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_CAMPOS_ADICIONALES_TABLE,
            modelName: 'AdditionalFields',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const AdditionalFieldsSchema = {
    CA_CAMPOS_ADICIONALES: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    CA_LLAVE: {
        type: DataTypes.STRING(20)
    },
    CA_VALOR: {
        type: DataTypes.STRING(100)
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

module.exports = { AdditionalFields, AdditionalFieldsSchema };
