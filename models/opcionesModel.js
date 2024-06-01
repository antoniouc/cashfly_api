const { obtenerConexion } = require('../database/conexion');

// creamos una funcion para poder obtener todas las categorias de gastos
async function obtenerCategorias() {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM categorias');
        return results;
    } catch (error) {
        console.error('Error al obtener las categorias:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}

async function obtenerMetodospago() {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM metodospago');
        return results;
    } catch (error) {
        console.error('Error al obtener los metodos de pago:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    obtenerCategorias,
    obtenerMetodospago
}