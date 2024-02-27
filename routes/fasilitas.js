
    const express = require('express');
    const router = express.Router();
    const fasilitasController = require('../controllers/fasilitas');

    router.post('/', fasilitasController.create);
    router.get('/', fasilitasController.getAll);
    router.get('/:id', fasilitasController.getById);
    router.put('/:id', fasilitasController.update);
    router.delete('/:id', fasilitasController.delete);

    module.exports = router;
    