const opcionModel = require('../models/opcionesModel');

async function obtenerCategorias() {
    return await opcionModel.obtenerCategorias();
}

async function obtenerMetodospago(){
    return await opcionModel.obtenerMetodospago();
}
module.exports = {
    obtenerCategorias,
    obtenerMetodospago
};