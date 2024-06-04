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

async function editarMovimiento(
  TransaccionID,
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
  await movimientomodel.editarMovimiento(
      TransaccionID,
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

async function ObtenerMovimientosid(TransaccionID,UsuarioID) {
  return await movimientomodel.ObtenerMovimientosid(TransaccionID,UsuarioID);
}

module.exports = {
  registrarMovimiento,
  ObtenerMovimientos,
  ObtenerMovimientosid,
  editarMovimiento
};
