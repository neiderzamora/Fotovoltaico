let eficienciaInversor;
let volSistm;

function calcAutonomo() {
  consumoDP = parseInt(almacenWh.autonomo);
  demandaMax = consumoDP * 0.25 + consumoDP;
  potenciaFV = demandaMax / horaSolar;

  controlador = {
    voltaje: 145,
  };

  if ((demandaMax <= 2000) & (demandaMax > 1)) {
    volSistm = 12;
    eficienciaInversor = 0.9;
    modulo = {
      potencia: 200,
      Voc: 41,
      Isc: 10.2,
    };
    bateria = {
      voltaje: 12,
      diasAutonomia: 1,
      profundidadDescarga: 0.5,
      capacidadBateria: 67.6,
    };
    verMas = {
      bateria:
        "https://autosolar.co/pdf/datasheet-tensite-batteries-GEL-12-100.pdf",
      modulo: "https://autosolar.es/pdf/sm200w-12v-must-solar-panel.pdf",
      inversor:
        "https://autosolar.co/pdf/Datasheet-Multiplus-inverter-charger_2kVA-and-3kVA-120V-US-ES.pdf",
      controlador: "https://autosolar.co/pdf/PC1800F.pdf",
      manualC: "https://autosolar.co/pdf/PC1800F-manual.pdf",
    };
  } else if ((demandaMax <= 4000) & (demandaMax > 2001)) {
    volSistm = 24;
    eficienciaInversor = 0.93;
    modulo = {
      potencia: 440,
      Voc: 49.4,
      Isc: 11.2,
    };
    bateria = {
      voltaje: 12,
      diasAutonomia: 1,
      profundidadDescarga: 0.5,
      capacidadBateria: 77,
    };
    verMas = {
      bateria:
        "https://autosolar.co/pdf/datasheet-tensite-batteries-GEL-12-150.pdf",
      modulo: "https://autosolar.co/pdf/JaSolar-M72S20-MR440-465W.pdf",
      inversor:
        "https://autosolar.co/pdf/Ficha-Victron-Quattro-3000VA-15000VA.pdf",
      controlador: "https://autosolar.co/pdf/PC1800F.pdf",
      manualC: "https://autosolar.co/pdf/PC1800F-manual.pdf",
    };
  } else if ((demandaMax <= 20001) & (demandaMax > 4001)) {
    volSistm = 48;
    eficienciaInversor = 0.94;
    modulo = {
      potencia: 440,
      Voc: 41,
      Isc: 10.2,
    };
    bateria = {
      voltaje: 12,
      diasAutonomia: 1,
      profundidadDescarga: 0.5,
      capacidadBateria: 161,
    };
    verMas = {
      bateria:
        "https://autosolar.co/pdf/datasheet-tensite-batteries-GEL-12-300.pdf",
      modulo: "https://autosolar.co/pdf/JaSolar-M72S20-MR440-465W.pdf",
      inversor:
        "https://autosolar.co/pdf/Ficha-Tecnica-Quattro-3-10kVA-120V-CO.pdf",
      controlador: "https://autosolar.co/pdf/PC1800F.pdf",
      manualC: "https://autosolar.co/pdf/PC1800F-manual.pdf",
    };
  } else {
    limiteExcedido();
  }
  calculoBaterias();
  calculosModulos();
}

function inicio() {
  document.getElementById("viewHome").style.display = "block";
  document.getElementById("autonomo").style.display = "none";
  document.getElementById("hibrido").style.display = "none";
  document.getElementById("interconectado").style.display = "none";
  showBag();
}
function advertencia() {
  Swal.fire({
    html:
      "<div><h1 style='color:#e06666;font-weight:bold;text-align:center;animation:pulse;animation-duration:2s;'><i class='fa-solid fa-circle-exclamation'></i> Advertencia</h1>" +
      "<hr class='featurette-divider'>" +
      "<ul style='text-align:center;margin:0;padding:0;'><li><span style='color:#e06666'>(FV autonomo)</span> El consumo diario no puede excederse de 16.000 (Wh/dia).</li><li><span style='color:#e06666'>(FV autonomo)</span> Segun el consumo de su sistema varia el voltaje para el sistema.<span>" +
      "<table class='table'><thead class='table-dark'><tr><th>12v</th><th>24v</th><th>48v</th></thead><tbody><td class='table-warning'>1-2000(Wh)</td><td class='table-warning'>2000-4000(Wh)</td><td class='table-warning'>4001+(Wh)</td></tbody></table></span></li><li><span style='color:#e06666'>(FV hibrido/interconectado)</span> El consumo diario no puede excederse de 35.200 (Wh/dia).</li><li><span style='color:#e06666'>(FV hibrido)</span> El consumo de cargas criticas no puede excederse de 5.300 (Wh/dia).</li></ul><br></div><style>li{padding-buttom:20px !important}</style>",
  });
}
