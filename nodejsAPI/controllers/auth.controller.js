const { response } = require('express');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const { createJWT } = require('../helpers/jwt');

const getUsers = (req, res = response) => {
    try {
        req.getConnection((err, con) => {
            const sql = 'SELECT * FROM users';
            con.query(sql, function (error, results, fields) {
                if (error) throw error;
                return res.status(201).json({
                    ok: true,
                    data: results,
                    msg: 'List retrieved'
                });
            });
        });
    }
    catch { return res.status(500).json({ ok: true, msg: 'List of Users cannot be retrieved /' }); }
}

const createUser = async (req, res = response) => {

    return res.status(400).json({
        ok: true,
        msg: 'User already exist'
    });


    var token = await createJWT(req.body.name, req.body.email);
    try {
        req.getConnection((err, con) => {
            con.query('SELECT * FROM users WHERE email = ?', [req.body.email], (error, results, fields) => {
                if (error) throw error;
                if (results.length === 0) {
                    const salt = bcrypt.genSaltSync(10);
                    req.body.password = bcrypt.hashSync(req.body.password, salt);
                    con.query('INSERT INTO users set ?', [req.body], (error, results, fields) => {
                        if (error) throw error;
                        return res.status(201).json({
                            ok: true,
                            data: results,
                            msg: 'User created',
                            token: token
                        });
                    });
                } else {
                    return res.status(400).json({
                        ok: true,
                        msg: 'User already exist'
                    });
                }
            });
        });
    }
    catch { return res.status(500).json({ ok: true, msg: 'User cannot be created. Check with the system Administrator /new' }); }
}

const loginUsuario = async (req, res = response) => {
    var token = await createJWT(req.body.email, req.body.password);
    try {
        req.getConnection((err, con) => {
            con.query('SELECT * FROM users WHERE email = ? LIMIT 1', [req.body.email], (error, results, fields) => {
                if (error) throw error;
                if (results.length === 1) {

                    const validPwd = bcrypt.compareSync(req.body.password, results[0].password);
                    if (!validPwd) { return res.status(400).json({ ok: false, msg: 'Cannot be logged' }); }

                    return res.status(200).json({
                        ok: true,
                        data: results,
                        msg: 'Logged In',
                        token: token
                    });
                } else { return res.status(400).json({ ok: false, msg: 'Cannot be logged' }); }
            });
        });
    }
    catch { return res.status(500).json({ ok: true, msg: 'Login cannot be done. Check with the system Administrator /new' }); }
}

const renewUsuario = async (req, res = response) => {

    const { uid, name } = req;

    var token = await createJWT(uid, name);

    try {
        return res.status(201).json({
            ok: true,
            msg: 'Renew Token de usuario /renew',
            uid,
            name,
            token
        });
    }
    catch { return res.status(500).json({ ok: true, msg: 'Token cannot be refreshed. Check with the system Administrator /login' }); }


}

module.exports = { createUser, loginUsuario, renewUsuario, getUsers }