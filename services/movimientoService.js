const movimientomodel = require("../models/movimientosmodel");

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
  await movimientomodel.registrarMovimiento(
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
}

async function ObtenerMovimientos(UsuarioID) {
  return await movimientomodel.obtenerMovimientos(UsuarioID);
}

module.exports = {
  registrarMovimiento,
  ObtenerMovimientos,
};
