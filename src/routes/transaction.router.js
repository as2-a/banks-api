const express = require('express');
const router = express.Router(); 
const transactionController = require('../controllers/transaction.controller');

router
    .get('/', transactionController.get )
    .get('/:id', transactionController.getById )
    .post('/', transactionController.create )
    .put('/:id', transactionController.update )
    .delete('/:id', transactionController._delete );

module.exports = router;