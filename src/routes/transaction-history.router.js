const express = require('express');
const router = express.Router(); 
const transactionHistoryController = require('../controllers/transaction-history.controller');

router
    .get('/', transactionHistoryController.get )
    .get('/:account/:initDate/:endDate', transactionHistoryController.getByDate )
    .get('/:id', transactionHistoryController.getById )
    .post('/', transactionHistoryController.create )
    .post('/accounts', transactionHistoryController.getByAccounts )
    .put('/:id', transactionHistoryController.update )
    .delete('/:id', transactionHistoryController._delete );

module.exports = router;