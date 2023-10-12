const express = require('express');
const router = express.Router(); 
const currencyController = require('../controllers/currency.controller');

router
    .get('/', currencyController.get )
    .get('/:id', currencyController.getById )
    .post('/', currencyController.create )
    .put('/:id', currencyController.update )
    .delete('/:id', currencyController._delete );

module.exports = router;