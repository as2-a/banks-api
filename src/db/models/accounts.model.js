const { Model, DataTypes } = require('sequelize');

const SBI_CUENTA_TABLE = 'SBI_CUENTA';

class Accounts extends Model {
    static config(sequelize) {
        return {
            sequelize,
            tableName: SBI_CUENTA_TABLE,
            modelName: 'Accounts',
            timestamps: false,
            schema: 'bancos'
        };
    }
}

const AccountsSchema = {
    CNT_CUENTA: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    CNT_NUMERO_CUENTA: {
        allowNull: false,
        type: DataTypes.INTEGER
    },
    CNT_TITULAR: {
        type: DataTypes.STRING(50)
    },
    CNT_SALDO: {
        type: DataTypes.DOUBLE
    },
    BNC_BANCO: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'SBI_BANCO', 
            key: 'BNC_BANCO'  
        }
    },
    CNT_ESTADO: {
        type: DataTypes.BOOLEAN
    },
    CNT_NOMBRE: {
        type: DataTypes.STRING(200)
    },
    CNT_TELEFONO: {
        type: DataTypes.INTEGER
    },
    CNT_CORREO: {
        type: DataTypes.STRING(100)
    },
    TCN_TIPO_CUENTA: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'AccountType', 
            key: 'TCN_TIPO_CUENTA'   
        }
    },
    MND_MONEDA: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'Currency', 
            key: 'MND_MONEDA'   
        }
    }
};

module.exports = { Accounts, AccountsSchema };
