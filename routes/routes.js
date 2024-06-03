const express = require('express');
const router = express.Router();

// Importar rutas específicas

const usuariosRoute = require('./usuariosRoute');
const opcionesRoute = require('./opcionRoute');
const movimientosRoute = require('./agregarmovimiento');

// Rutas específicas para usuarios
router.use('/usuarios', usuariosRoute);
router.use('/opcion', opcionesRoute);
router.use('/movimiento', movimientosRoute);

module.exports = 
    router;