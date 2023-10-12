const express = require('express'); 
const accountsRouter = require('./accounts.router');
const banksRouter = require('./banks.router');
const additionalFieldsRouter = require('./additional-fields.router');
const conciliationRouter = require('./conciliation.router');
const documentStateRouter = require('./document-state.router');
const transactionHistoryRouter = require('./transaction-history.router');
const currencyRouter = require('./currency.router');
const transactionOriginRouter = require('./transaction-origin.router');
const accountTypeRouter = require('./account-type.router');
const documentTypeRouter = require('./document-type.router');
const transactionTypeRouter = require('./transaction-type.router');
const transactionRouter = require('./transaction.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/', router); 
  router.use('/accounts', accountsRouter);
  router.use('/banks', banksRouter);
  router.use('/additional-fields', additionalFieldsRouter);
  router.use('/conciliation', conciliationRouter);
  router.use('/document-state', documentStateRouter);
  router.use('/currency', currencyRouter);
  router.use('/transaction-history', transactionHistoryRouter);
  router.use('/transaction-origin', transactionOriginRouter);
  router.use('/account-type', accountTypeRouter);
  router.use('/document-type', documentTypeRouter);
  router.use('/transaction-type', transactionTypeRouter);
  router.use('/transaction', transactionRouter);
}

module.exports = routerApi;