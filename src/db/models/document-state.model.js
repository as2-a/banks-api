const { Model, DataTypes } = require('sequelize');

const SBI_ESTADO_DOCUMENTO_TABLE = 'SBI_ESTADO_DOCUMENTO';

class DocumentState extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_ESTADO_DOCUMENTO_TABLE,
            modelName: 'DocumentState',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const DocumentStateSchema = {
    ED_ESTADO_DOCUMENTO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    ED_DESCRIPCION: {
        type: DataTypes.STRING(100)
    }
};

module.exports = { DocumentState, DocumentStateSchema };
