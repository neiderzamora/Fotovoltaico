function calculoBaterias() {
  consumoBateriaDia = vSistemaFinal / eficienciaInversor / volSistm;
  bateriasParalelo =
  Math.round((consumoBateriaDia * bateria.diasAutonomia) /
    bateria.profundidadDescarga /
    bateria.capacidadBateria);
  bateriaSerie = Math.round(volSistm / bateria.voltaje);
}
