const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
require('dotenv').config();

// Crear el servidor / aplicacion de express
const app = express();

// Base de Datos
app.use(myConnection(mysql, {
    connectionLimit: 10,
    host: process.env.db_host,
    user: process.env.db_user,
    password: process.env.db_password,
    database: process.env.db_database,
    port: process.env.db_port

}, 'single'));

// Directorio publico
app.use(express.static('public'));

// CORS
app.use(cors());

// Lectura y Parseo del body
app.use(express.json());

// Rutas
app.use('/api/auth', require('./routes/auth'));
app.use('/api/land', require('./routes/land'));

// running...
app.listen(process.env.PORT, () => { console.log(`Server at ${process.env.PORT} port`); });