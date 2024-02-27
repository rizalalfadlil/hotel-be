
    const express = require('express');
    const router = express.Router();
    const tamuController = require('../controllers/tamu');

    router.post('/', tamuController.create);
    router.get('/', tamuController.getAll);
    router.get('/:id', tamuController.getById);
    router.put('/:id', tamuController.update);
    router.delete('/:id', tamuController.delete);

    module.exports = router;
    