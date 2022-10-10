/* Calculo modulos fotovoltaicos */
function calculosModulos() {
  potenciaFotovoltaica = vSistemaFinal / horaSolarMin;
  numeroModulos = Math.round(potenciaFotovoltaica / modulo.potencia);

  if (numeroModulos % 2 == 0) {
    seriesModulo = numeroModulos / paraleloModulo;
  } else {
    seriesModulo = (numeroModulos + 1) / paraleloModulo;
  }

  voltajeModulos = modulo.Voc * paraleloModulo;
  amperajeModulos = modulo.Isc * seriesModulo;
}
