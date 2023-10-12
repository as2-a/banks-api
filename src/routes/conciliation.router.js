const express = require('express');
const router = express.Router(); 
const conciliationController = require('../controllers/conciliation.controller');

router
    .get('/', conciliationController.get )
    .get('/:id', conciliationController.getById )
    .post('/', conciliationController.create )
    .put('/:id', conciliationController.update )
    .delete('/:id', conciliationController._delete );

module.exports = router;