const express = require('express');
const router = express.Router(); 
const transactionTypeController = require('../controllers/transaction-type.controller');

router
    .get('/', transactionTypeController.get )
    .get('/:id', transactionTypeController.getById )
    .post('/', transactionTypeController.create )
    .put('/:id', transactionTypeController.update )
    .delete('/:id', transactionTypeController._delete );

module.exports = router;