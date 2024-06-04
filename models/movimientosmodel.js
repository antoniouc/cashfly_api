const { obtenerConexion } = require("../database/conexion");

async function registrarMovimiento(
    UsuarioID,
    Descripcion,
    Total,
    Fecha,
    CategoriaID,
    MetodoPagoID,
    Nota,
    Etiquetas,
    Tipo
) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query(
            "INSERT INTO transacciones (UsuarioID,Descripcion,Total,Fecha,CategoriaID,MetodoPagoID,Nota,Etiquetas,Tipo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [
                UsuarioID,
                Descripcion,
                Total,
                Fecha,
                CategoriaID,
                MetodoPagoID,
                Nota,
                Etiquetas,
                Tipo,
            ]
        );
        console.log("transaccion insertado correctamente");
    } catch (error) {
        console.error("Error al insertar el movimiento:", error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

async function obtenerMovimientos(usuarioID) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query(
            `
            SELECT *
            FROM transacciones
            WHERE usuarioID = ?
            `,
            [usuarioID]
        );
        return results;
    } catch (error) {
        console.error(
            "Error al obtener los productos del usuario ID:",
            error.message
        );
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    registrarMovimiento,
    obtenerMovimientos,
};
