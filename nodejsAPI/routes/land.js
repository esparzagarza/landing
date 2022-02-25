const { Router } = require('express');
const { getItems, getCategories } = require('../controllers/land.controller');

const router = Router();

router.get('/', getItems);

router.get('/categories', getCategories);

module.exports = router;


