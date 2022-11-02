function calculosModulos() {
  numModulo = Math.round(potenciaFV / modulo.potencia);
  serieModulo = Math.round(controlador.voltaje / modulo.Voc);

  if (numModulo % 2 != 0 && numModulo > 3) {
    numModulo = numModulo + 1;
    if (numModulo % 3 == 0 && numModulo % 2 == 0) {
      serieModulo = 3;
      paraleloModulo = numModulo / serieModulo;
    } else {
      serieModulo = 2;
      paraleloModulo = numModulo / serieModulo;
    }
  }
  if (serieModulo > 3 && numModulo > serieModulo) {
    serieModulo = 3;
    paraleloModulo = numModulo / serieModulo;
  }
  if (serieModulo >= 3 && numModulo <= 3) {
    serieModulo = numModulo;
    paraleloModulo = 0;
  }
  if (serieModulo == 4) {
    serieModulo = 2;
    paraleloModulo = 2;
  }
}
