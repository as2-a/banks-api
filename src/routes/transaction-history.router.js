const express = require('express');
const router = express.Router(); 
const transactionHistoryController = require('../controllers/transaction-history.controller');

router
    .get('/', transactionHistoryController.get )
    .get('/:id', transactionHistoryController.getById )
    .post('/', transactionHistoryController.create )
    .put('/:id', transactionHistoryController.update )
    .delete('/:id', transactionHistoryController._delete );

module.exports = router;