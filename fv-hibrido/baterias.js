function calcBateriasH() {
  consumoBateriaDia = cargaCritica / inversor.eficiencia / bateria.voltaje;
  numBaterias = Math.round(cargaCritica / bateria.capacidad);
}
