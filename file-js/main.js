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
      bateria: "#",
      modulo: "#",
      inversor: "#",
      controlador: "#",
    };
  } else if ((consumoDiario <= 4000) & (consumoDiario > 2001)) {
    volSistm = 24;
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
      bateria: "#",
      modulo: "#",
      inversor: "#",
      controlador: "#",
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
        "https://autosolar.co/pdf/datasheet-tensite-batteries-GEL-12-150.pdf",
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
      "<div><h1 style='color:#7066e0;font-weight:bold;text-align:center;animation:pulse;animation-duration:2s;'>Advertencia</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>El consumo diario no puede excederse de 15.000</p></div>",
  });
}
