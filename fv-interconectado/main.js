function calcInterconectado() {
  demandaMax = parseInt(almacenWh.interconectado);
  demandaMax = demandaMax * 0.25 + demandaMax;
  potenciaFV = demandaMax / horaSolar;

  if ((potenciaFV <= 6000) & (potenciaFV > 1)) {
    inversor = {
      eficiencia: 0.91,
      voltaje: 48,
      mppt: 2,
    };
    modulo = {
      potencia: 385,
      Voc: 49,
      Isc: 10,
    };
    verMas = {
      modulo: "https://autosolar.co/pdf/panel-solar-jasolar-PERC-380W.pdf",
      inversor: "https://autosolar.co/pdf/3004270-SPH3000-6000TL-BL-US.pdf",
    };
  } else if ((potenciaFV <= 15000) & (potenciaFV > 6001)) {
    inversor = {
      eficiencia: 0.92,
      voltaje: 48,
      mppt: 2,
    };
    modulo = {
      potencia: 385,
      Voc: 49,
      Isc: 10,
    };
    verMas = {
      modulo: "https://autosolar.co/pdf/panel-solar-jasolar-PERC-380W.pdf",
      inversor: "https://autosolar.co/pdf/InfiniSolar-10kW-Trif%C3%A1sico.pdf",
    };
  } else {
    limiteExcedido();
  }
  calcModulos();
}
