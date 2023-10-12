const express = require('express');
const router = express.Router(); 
const documentStateController = require('../controllers/document-state.controller');

router
    .get('/', documentStateController.get )
    .get('/:id', documentStateController.getById )
    .post('/', documentStateController.create )
    .put('/:id', documentStateController.update )
    .delete('/:id', documentStateController._delete );

module.exports = router;