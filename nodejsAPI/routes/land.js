const { Router } = require('express');
const { getItems } = require('../controllers/land.controller');

const router = Router();

router.get('/', getItems);

module.exports = router;


