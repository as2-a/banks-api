const { Model, DataTypes } = require('sequelize');

const SBI_TIPO_CUENTA_TABLE = 'SBI_TIPO_CUENTA';

class AccountType extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_TIPO_CUENTA_TABLE,
            modelName: 'AccountType',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const AccountTypeSchema = {
    TCN_TIPO_CUENTA: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    TCN_NOMBRE: {
        type: DataTypes.STRING(15)
    }
};

module.exports = { AccountType, AccountTypeSchema };
