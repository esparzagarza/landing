const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUsuario, renewUsuario, getUsers } = require('../controllers/auth.controller');
const { validateFields } = require('../middlewares/validateFields');
const { validateJWT } = require('../middlewares/validateJWT');

const router = Router();

router.post('/new', [
    check('name', 'Need name').notEmpty(),
    check('email', 'Need email').isEmail(),
    check('password', 'Need password length').isLength({ min: 6 }),
    validateFields

], createUser);

router.post('/', [
    check('email', 'Need email').isEmail(),
    check('password', 'Need password length').isLength({ min: 6 }),
    validateFields

], loginUsuario);

router.get('/renew', validateJWT, renewUsuario)

router.get('/', getUsers)

module.exports = router;


