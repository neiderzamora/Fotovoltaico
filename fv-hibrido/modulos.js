function calcModulosH() {
  numModulo = potenciaFV / modulo.potencia;
  numModulo = Math.round(numModulo * 0.25 + numModulo);

  serieModulo = Math.round(numModulo / inversor.mppt);
  paraleloModulo = Math.round(numModulo / serieModulo);

  if (numModulo % 2 != 0) {
    numModulo = numModulo + 1;
    paraleloModulo = Math.round(numModulo / serieModulo);
    serieModulo = Math.round(numModulo / inversor.mppt);
  }
}
 