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
            SELECT 
            t.*,
            c.Nombre AS NombreCategoria,
            mp.Nombre AS NombreMetodoPago
        FROM 
            cashfly.transacciones t
        JOIN 
            categorias c ON t.CategoriaID = c.CategoriaID
        JOIN 
            metodospago mp ON t.MetodoPagoID = mp.MetodoPagoID
        WHERE 
            t.usuarioID = ?;
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

async function editarMovimiento(
    TransaccionID,
    usuarioID,
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
            "UPDATE transacciones SET UsuarioID= ?, Descripcion = ?, Total = ?, Fecha = ?, CategoriaID = ?, MetodoPagoID = ?, Nota = ?, Etiquetas = ?, Tipo = ? WHERE TransaccionID = ?",
            [
                usuarioID,
                Descripcion,
                Total,
                Fecha,
                CategoriaID,
                MetodoPagoID,
                Nota,
                Etiquetas,
                Tipo,
                TransaccionID
            ]
        );
        console.log("Movimiento actualizado correctamente");
    } catch (error) {
        console.error("Error al actualizar el movimiento:", error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}


async function ObtenerMovimientosid(TransaccionID, usuarioID){

    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query(
            `
            SELECT 
            t.*,
            c.Nombre AS NombreCategoria,
            mp.Nombre AS NombreMetodoPago
        FROM 
            cashfly.transacciones t
        JOIN 
            categorias c ON t.CategoriaID = c.CategoriaID
        JOIN 
            metodospago mp ON t.MetodoPagoID = mp.MetodoPagoID
        WHERE 
            t.usuarioID = ? AND t.TransaccionID = ?;
            `,
            [usuarioID,TransaccionID]
        );
        return results[0];
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

async function borrarMovimiento(TransaccionID) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query(
            "DELETE FROM transacciones WHERE TransaccionID = ?",
            [TransaccionID]
        );
        console.log("Movimiento eliminado correctamente");
    } catch (error) {
        console.error("Error al eliminar el movimiento:", error);
        throw error;
    } finally {
        conexion.release(); // Liberar la conexión al finalizar
    }
}

module.exports = {
    registrarMovimiento,
    obtenerMovimientos,
    ObtenerMovimientosid,
    editarMovimiento,
    borrarMovimiento
};
