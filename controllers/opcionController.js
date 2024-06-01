const opcionesService = require('../services/opcionesService');

async function obtenerCategorias(req, res) {
    try {
        const opciones = await opcionesService.obtenerCategorias();
        res.json(opciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener las opciones' });
    }
}

async function obtenerMetodospago(req, res) {
    try {
        const opciones = await opcionesService.obtenerMetodospago();
        res.json(opciones);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los metodos de pago' });
    }
}

module.exports={
    obtenerCategorias,
    obtenerMetodospago
}