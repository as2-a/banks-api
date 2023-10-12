const express = require('express');
const router = express.Router(); 
const accountTypeController = require('../controllers/account-type.controller');

router
    .get('/', accountTypeController.get )
    .get('/:id', accountTypeController.getById )
    .post('/', accountTypeController.create )
    .put('/:id', accountTypeController.update )
    .delete('/:id', accountTypeController._delete );

module.exports = router;