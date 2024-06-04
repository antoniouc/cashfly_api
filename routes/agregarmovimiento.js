const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/auntenticador');
const movimientoController = require('../controllers/movimientoControlle');

// Rutas relacionadas con el carrito de compras
router.post('/agregar', verificarToken, movimientoController.registrarMovimiento);
router.post('/historial', verificarToken, movimientoController.obtenerMovimientos);
router.post('/TransaccionID', verificarToken, movimientoController.obtenerMovimientosid);
router.put('/actualizar/', verificarToken, movimientoController.actualizarMovimiento);
module.exports= router;