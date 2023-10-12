const express = require('express');
const router = express.Router(); 
const transactionOriginController = require('../controllers/transaction-origin.controller');

router
    .get('/', transactionOriginController.get )
    .get('/:id', transactionOriginController.getById )
    .post('/', transactionOriginController.create )
    .put('/:id', transactionOriginController.update )
    .delete('/:id', transactionOriginController._delete );

module.exports = router;