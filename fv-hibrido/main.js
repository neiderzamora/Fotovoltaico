let cargaCritica;
function calcHibrido() {
  consumoDP = parseInt(almacenWh.hibrido[0]);
  demandaMax = consumoDP * 0.25 + consumoDP;
  potenciaFV = demandaMax / horaSolar;

  cargaCritica = parseInt(almacenWh.hibrido[1]);
  cargaCritica = cargaCritica * 0.25 + cargaCritica;

  bateria = {
    voltaje: 48,
    diasAutonomia: 1,
    profundidadDescarga: 0.9,
    capacidad: 2400,
    a: 50,
  };

  if ((potenciaFV <= 2000) & (potenciaFV > 1)) {
    inversor = {
      eficiencia: 0.91,
      voltaje: 48,
      mppt: 1,
    };
    modulo = {
      potencia: 385,
      Voc: 49,
      Isc: 10,
    };
    verMas = {
      bateria: "https://autosolar.es/pdf/Pylontech-PowerCube-HV-manual.pdf",
      modulo: "https://autosolar.co/pdf/panel-solar-jasolar-PERC-380W.pdf",
      inversor: "https://autosolar.co/pdf/AXPERT-1-2KW-MKS-MKS-PLUS-120V.pdf",
    };
  } else if ((potenciaFV <= 4000) & (potenciaFV > 2001)) {
    inversor = {
      eficiencia: 0.93,
      voltaje: 48,
      mppt: 2,
    };
    modulo = {
      potencia: 385,
      Voc: 49,
      Isc: 10,
    };
    verMas = {
      bateria: "https://autosolar.es/pdf/Pylontech-PowerCube-HV-manual.pdf",
      modulo: "https://autosolar.co/pdf/panel-solar-jasolar-PERC-380W.pdf",
      inversor: "https://autosolar.co/pdf/Ficha-Voltronic-Axpert-VMIII.pdf",
    };
  } else if ((potenciaFV <= 11000) & (potenciaFV > 4001)) {
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
      bateria: "https://autosolar.es/pdf/Pylontech-PowerCube-HV-manual.pdf",
      modulo: "https://autosolar.co/pdf/panel-solar-jasolar-PERC-380W.pdf",
      inversor: "https://autosolar.co/pdf/InfiniSolar-10kW-Trif%C3%A1sico.pdf",
    };
  } else {
    limiteExcedido();
  }
  if (cargaCritica >= 13750) {
    limiteExcedido();
  }
  calcModulosH();
  calcBateriasH();
}
