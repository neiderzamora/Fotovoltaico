/* Datos estandar */
let verMas = {};
let volSistm;
let consumoDiario;
let demandaMax;

/* Inversor */
let eficienciaInversor;

function empezar() {
  consumoDiario = parseInt(prompt("Digite el consumo diario de su sistema: "));

  if (consumoDiario <= 2000) {
    volSistm = 12;
    eficienciaInversor = 0.93;
    modulo = {
      potencia: 210,
      Voc: 20.05,
      Isc: 11.07,
    };
    bateria = {
      voltaje: 12,
      diasAutonomia: 1,
      profundidadDescarga: 0.5,
      capacidadBateria: 67.6,
    };
    verMas = {
      bateria: "https://autosolar.co/pdf/datasheet-tensite-batteries-GEL-12-100.pdf",
      modulo: "#",
      inversor: "https://autosolar.co/pdf/3004270-SPH3000-6000TL-BL-US.pdf",
      controlador: "https://autosolar.co/pdf/PC1800F.pdf",
    };
  } else if ((consumoDiario <= 4000) & (consumoDiario > 2001)) {
    volSistm = 24;
    eficienciaInversor = 0.93;
    modulo = {
      potencia: 340,
      Voc: 38.5,
      Isc: 9.45,
    };
    bateria = {
      voltaje: 12,
      diasAutonomia: 1,
      profundidadDescarga: 0.5,
      capacidadBateria: 77,
    };
    verMas = {
      bateria: "https://autosolar.co/pdf/datasheet-tensite-batteries-GEL-12-150.pdf",
      modulo: "https://autosolar.co/pdf/ERA-340w.pdf",
      inversor: "https://autosolar.co/pdf/3004270-SPH3000-6000TL-BL-US.pdf",
      controlador: "https://autosolar.co/pdf/PC1800F.pdf",
    };
  } else if ((consumoDiario <= 15000) & (consumoDiario > 4001)) {
    volSistm = 48;
    eficienciaInversor = 0.93;
    modulo = {
      potencia: 250,
      Voc: 48.6,
      Isc: 5.48,
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
      modulo:
        "http://www.enersol-sa.com/images/2019/Hoja-de-datos/panel-solar/brightsunpower/PanelSolar-Hoja-tecnica-Monocristalino-BSP-250WSM.pdf",
      inversor: "https://autosolar.co/pdf/3004270-SPH3000-6000TL-BL-US.pdf",
      controlador: "https://autosolar.co/pdf/PC1800F.pdf",
    };
  } else {
    console.log("datos invalidos");
  }
  calculoBaterias();
  calculosModulos();
  componentes();
}

function efectsComponentes() {
  document
    .querySelector("#seccionComponentes")
    .classList.add("animate__animated", "animate__zoomIn");
}
function inicio() {
  document.getElementById("viewHome").style.display = "block";
  document.getElementById("seccionComponentes").style.display = "none";
}
function componentes() {
  if (consumoDiario) document.getElementById("viewHome").style.display = "none";
  document.getElementById("seccionComponentes").style.display = "flex";
}
function advertencia() {
  Swal.fire({
    html:
      "<div><h1 style='color:#e06666;font-weight:bold;text-align:center;animation:pulse;animation-duration:2s;'><i class='fa-solid fa-circle-exclamation'></i> Advertencia</h1>" +
      "<hr class='featurette-divider'>" +
      "<ul style='text-align:center;margin:0;padding:0;'><li>El consumo diario no puede excederse de 15.000Wh</li><li>Segun el consumo de su sistema varia el voltaje para el sistema<span>" +
      "<table class='table'><thead class='table-dark'><tr><th>24v</th><th>36v</th><th>48v</th></thead><tbody><td class='table-warning'>1-2000(Wh)</td><td class='table-warning'>2000-4000(Wh)</td><td class='table-warning'>4001+(Wh)</td></tbody></table></span></li></ul><br></div>",
  });
}
