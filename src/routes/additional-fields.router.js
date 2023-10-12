const express = require('express');
const router = express.Router(); 
const additionalFieldsController = require('../controllers/additional-fields.controller');

router
    .get('/', additionalFieldsController.get )
    .get('/:id', additionalFieldsController.getById )
    .post('/', additionalFieldsController.create )
    .put('/:id', additionalFieldsController.update )
    .delete('/:id', additionalFieldsController._delete );

module.exports = router;