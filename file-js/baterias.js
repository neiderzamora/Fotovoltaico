/* Baterias */
let consumoBateriaDia;
let bateriasParalelo;
let bateriaSerie;
let bateria = {};

/* Baterias paralelo y en serie */
function calculoBaterias() {
  consumoBateriaDia = consumoDiario / eficienciaInversor / volSistm;
  bateriasParalelo = Math.round(
    (consumoBateriaDia * bateria.diasAutonomia) /
      bateria.profundidadDescarga /
      bateria.capacidadBateria
  );
  bateriaSerie = Math.round(volSistm / bateria.voltaje);
}
