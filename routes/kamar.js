
    const express = require('express');
    const router = express.Router();
    const kamarController = require('../controllers/kamar');

    router.post('/', kamarController.create);
    router.get('/', kamarController.getAll);
    router.get('/:id', kamarController.getById);
    router.put('/:id', kamarController.update);
    router.delete('/:id', kamarController.delete);

    module.exports = router;
    