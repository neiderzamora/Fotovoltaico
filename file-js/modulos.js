/* Modulos fotovoltaicos */
let potenciaFotovoltaica;
let numeroModulos;
let voltajeModulos;
let amperajeModulos;
let horaSolarMin = 4;
let seriesModulo;
let paraleloModulo = 2;
let modulo = {};

/* Calculo modulos fotovoltaicos */
function calculosModulos() {
  potenciaFotovoltaica = consumoDiario / horaSolarMin;
  numeroModulos = Math.round(potenciaFotovoltaica / modulo.potencia);

  if (numeroModulos % 2 == 0) {
    seriesModulo = numeroModulos / paraleloModulo;
  } else {
    seriesModulo = (numeroModulos + 1) / paraleloModulo;
  }

  voltajeModulos = modulo.Voc * paraleloModulo;
  amperajeModulos = modulo.Isc * seriesModulo;
}
