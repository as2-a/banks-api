const express = require('express');
const router = express.Router(); 
const banksController = require('../controllers/banks.controller');

router
    .get('/', banksController.get)
    .get('/:id', banksController.getById)
    .post('/', banksController.create)
    .put('/:id', banksController.update)
    .delete('/:id', banksController._delete);

module.exports = router;
