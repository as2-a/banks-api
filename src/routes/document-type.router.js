const express = require('express');
const router = express.Router(); 
const aocumentTypeController = require('../controllers/document-type.controller');

router
    .get('/', aocumentTypeController.get )
    .get('/:id', aocumentTypeController.getById )
    .post('/', aocumentTypeController.create )
    .put('/:id', aocumentTypeController.update )
    .delete('/:id', aocumentTypeController._delete );

module.exports = router;