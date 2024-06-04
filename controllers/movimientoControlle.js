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

async function actualizarMovimiento(req, res) {

    const { 
        movimientoId,
        UsuarioID,
        Descripcion,
        Total,
        Fecha,
        CategoriaID,
        MetodoPagoID,
        Nota,
        Etiquetas,
        Tipo 
    } = req.body;
    
    try {
        await movimientoService.editarMovimiento(
            movimientoId,
            UsuarioID,
            Descripcion,
            Total,
            Fecha,
            CategoriaID,
            MetodoPagoID,
            Nota,
            Etiquetas,
            Tipo
        );
        res.status(200).json({ message: 'Movimiento actualizado correctamente' });
    } catch (error) {
        console.error('Error al actualizar el movimiento:', error.message);
        res.status(500).json({ message: 'Error al actualizar el movimiento' });
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

async function obtenerMovimientosid(req, res){

   const {TransaccionId,UsuarioID} = req.body;
   console.log(TransaccionId);
   console.log(UsuarioID);
   try {
    const productos = await movimientoService.ObtenerMovimientosid(TransaccionId, UsuarioID);
    console.log(productos);
    res.status(200).json(productos);
} catch (error) {
    console.error('Error al obtener los productos del carrito:', error.message);
    res.status(500).json({ message: 'Error al obtener los productos del carrito' });
}


}

module.exports={
    registrarMovimiento,
    obtenerMovimientos,
    obtenerMovimientosid,
    actualizarMovimiento
}
