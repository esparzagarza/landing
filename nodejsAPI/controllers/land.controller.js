const { response } = require('express');

const getItems = (req, res = response) => {
    try {
        req.getConnection((err, con) => {
            const sql = 'SELECT * FROM items';
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
    catch { return res.status(500).json({ ok: true, msg: 'List of Items cannot be retrieved /' }); }
}

const getCategories = (req, res = response) => {
    try {
        req.getConnection((err, con) => {
            const sql = 'SELECT * FROM categories ORDER BY name';
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
    catch { return res.status(500).json({ ok: true, msg: 'List of Categories cannot be retrieved /' }); }
}

module.exports = { getItems, getCategories }