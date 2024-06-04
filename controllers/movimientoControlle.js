const movimientoService = require('../services/movimientoService');

async function registrarMovimiento(req, res) {
    const { 
        UsuarioID,
        Descripcion,
        Total,
        Fecha,
        CategoriaID,
        MetodoPagoID,
        Nota,
        Etiquetas,
        Tipo } = req.body;
    try {
        await movimientoService.registrarMovimiento(
            UsuarioID,
            Descripcion,
            Total,
            Fecha,
            CategoriaID,
            MetodoPagoID,
            Nota,
            Etiquetas,
            Tipo);
        res.status(200).json({ message: 'movimiento agregado correctamente' });
    } catch (error) {
        console.error('Error al agregar el producto al carrito:', error.message);
        res.status(500).json({ message: 'Error al agregar el producto al carrito' });
    }
}

async function obtenerMovimientos(req, res) {
    UsuarioID = req.body;
    try {
        const productos = await movimientoService.ObtenerMovimientos(UsuarioID);
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos del carrito:', error.message);
        res.status(500).json({ message: 'Error al obtener los productos del carrito' });
    }
}

module.exports={
    registrarMovimiento,
    obtenerMovimientos
}
