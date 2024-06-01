const express = require('express');
const router = express.Router();
const opcionController = require('../controllers/opcionController');

// Rutas para opciones
router.get('/obtener-categoria', opcionController.obtenerCategorias );
router.get('/obtener-metodopagos', opcionController.obtenerMetodospago);

module.exports = router;