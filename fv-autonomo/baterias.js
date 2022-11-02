function calculoBaterias() {
  consumoBateriaDia = demandaMax / eficienciaInversor / volSistm;
  bateriasParalelo = Math.round(
    (consumoBateriaDia * bateria.diasAutonomia) /
      bateria.profundidadDescarga /
      bateria.capacidadBateria
  );
  bateriaSerie = Math.round(volSistm / bateria.voltaje);
  numBaterias = bateriaSerie * bateriasParalelo;
  if (numBaterias == 0) {
    numBaterias = bateriaSerie + bateriasParalelo;
  }
}
