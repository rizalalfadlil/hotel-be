
    const express = require('express');
    const router = express.Router();
    const check_inController = require('../controllers/check_in');

    router.post('/', check_inController.create);
    router.get('/', check_inController.getAll);
    router.get('/:id', check_inController.getById);
    router.put('/:id', check_inController.update);
    router.delete('/:id', check_inController.delete);

    module.exports = router;
    