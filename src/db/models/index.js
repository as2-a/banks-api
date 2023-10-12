const { Accounts, AccountsSchema } = require('./accounts.model');
const { AdditionalFields, AdditionalFieldsSchema } = require('./additional-fields.model');
const { BanksSchema, Banks } = require('./banks.model');
const { Conciliation, ConciliationSchema } = require('./conciliation.model');
const { Currency, CurrencySchema } = require('./currency.model');
const { DocumentState, DocumentStateSchema } = require('./document-state.model');
const { TransactionHistory, TransactionHistorySchema } = require('./transaction-history.model');
const { TransactionOrigin, TransactionOriginSchema } = require('./transaction-origin.model');
const { AccountType, AccountTypeSchema } = require('./account-type.model');
const { DocumentType, DocumentTypeSchema } = require('./document-type.model');
const { TransactionType, TransactionTypeSchema } = require('./transaction-type.model');
const { Transaction, TransactionSchema } = require('./transaction.model');

function setupModels(sequelize) {
    Accounts.init(AccountsSchema, Accounts.config(sequelize));
    Banks.init(BanksSchema, Banks.config(sequelize));
    AdditionalFields.init(AdditionalFieldsSchema, AdditionalFields.config(sequelize));
    Conciliation.init(ConciliationSchema, Conciliation.config(sequelize));
    DocumentState.init(DocumentStateSchema, DocumentState.config(sequelize));
    TransactionHistory.init(TransactionHistorySchema, TransactionHistory.config(sequelize)); 
    Currency.init(CurrencySchema, Currency.config(sequelize));
    TransactionOrigin.init(TransactionOriginSchema, TransactionOrigin.config(sequelize));
    AccountType.init(AccountTypeSchema, AccountType.config(sequelize));
    DocumentType.init(DocumentTypeSchema, DocumentType.config(sequelize));
    TransactionType.init(TransactionTypeSchema, TransactionType.config(sequelize));
    Transaction.init(TransactionSchema, Transaction.config(sequelize));
}

module.exports = setupModels;