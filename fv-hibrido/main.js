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
      inversor: "https://autosolar.co/pdf/InfiniSolar-10kW-Trif%C3%A1sico.pdf",
      inversorM:
        "https://www.solartex.co/tienda/wp-content/uploads/2019/08/InfiniSolar-2KW-3KW-manual.pdf",
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
      inversor: "https://autosolar.co/pdf/InfiniSolar-10kW-Trif%C3%A1sico.pdf",
      inversorM:
        "https://campusuccedu-my.sharepoint.com/:b:/g/personal/neider_zamora_campusucc_edu_co/ESLhARgyw8xFhAlkUsfUsjYBdA-RPA7DY2XbkozchdCsnQ?e=olW80U",
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
      inversorM:
        "https://campusuccedu-my.sharepoint.com/:b:/g/personal/neider_zamora_campusucc_edu_co/ESkxSukfiGpAldT7fCiJyBIBYKY9HQ6gKXgzwjdFHh9X0w?e=HiH4sF",
    };
  } else {
    limiteExcedido();
  }
  if (cargaCritica >= 6626) {
    limiteExcedido();
  }
  calcModulosH();
  calcBateriasH();
}
