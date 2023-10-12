const { Model, DataTypes } = require('sequelize');

const SBI_TIPO_DOCUMENTO_TABLE = 'SBI_TIPO_DOCUMENTO';

class DocumentType extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_TIPO_DOCUMENTO_TABLE,
            modelName: 'DocumentType',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const DocumentTypeSchema = {
    TD_TIPO_DOCUMENTO: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    TD_DESCRIPCION: {
        type: DataTypes.STRING(100)
    }
};

module.exports = { DocumentType, DocumentTypeSchema };
