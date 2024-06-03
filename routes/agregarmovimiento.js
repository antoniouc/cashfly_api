const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/auntenticador');
const movimientoController = require('../controllers/movimientoControlle');

// Rutas relacionadas con el carrito de compras
router.post('/agregar', verificarToken, movimientoController.registrarMovimiento);
router.get('/:usuarioID', verificarToken, movimientoController.obtenerMovimientos);

module.exports= router;