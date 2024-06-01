const express = require('express');
const router = express.Router();

// Importar rutas específicas

const usuariosRoute = require('./usuariosRoute');
const opcionesRoute = require('./opcionRoute');
// Rutas específicas para usuarios
router.use('/usuarios', usuariosRoute);
router.use('/opcion', opcionesRoute);

module.exports = router;