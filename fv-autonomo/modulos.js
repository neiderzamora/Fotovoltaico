let voltajeModulos;
let amperajeModulos;

function calculosModulos() {
  numModulo = Math.round(potenciaFV / modulo.potencia);

  seriesModulo = Math.round(volSistm / modulo.Voc);
  paraleloModulo = numModulo / seriesModulo;

  if (numModulo % 2 != 0) {
    numModulo = numModulo + 1;
    seriesModulo = Math.round(volSistm / modulo.Voc);
    paraleloModulo = numModulo / seriesModulo;
  }

  voltajeModulos = modulo.Voc * paraleloModulo;
  amperajeModulos = modulo.Isc * seriesModulo;
}
