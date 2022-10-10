const totalVatios = document.getElementById("vTotal").value;
const totalVatiosDia = document.getElementById("v/dia").value;

/* Datos estandar */
let voltajeSistemaTotal = parseInt(totalVatios);
let vatiosDia = parseInt(totalVatiosDia);
let vSistemaFinal;
let volSistm;
let verMas = {};

/* Modulos fotovoltaicos */
let potenciaFotovoltaica;
let numeroModulos;
let voltajeModulos;
let amperajeModulos;
let horaSolarMin = 4;
let seriesModulo;
let paraleloModulo = 2;
let modulo = {};

/* Inversor */
let eficienciaInversor;

/* Baterias */
let consumoBateriaDia;
let bateriasParalelo;
let bateriaSerie;
let bateria = {};

/* Verificar formulario completado */
function validaEnvia() {
  if (
    document.datosForm.vatiosTotal.value.length == 0 ||
    document.datosForm.vatiosDia.value.length == 0
  ) {
    Swal.fire({
      html:
        "<div><h1 style='color:#dc3545;font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>Datos Invalidos</h1>" +
        "</br>" +
        "<p style='text-align:center'>Digite los datos una vez mas.</p></div>",
    });
    document.datosForm.vatiosTotal.focus();
    return 0;
  } else {
    document.getElementById("viewHome").style.display = "none";
    document.getElementById("seccionComponentes").style.display = "flex";
  }
}

function verificar() {
  if (voltajeSistemaTotal <= 1250) {
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
      bateria: '#',
      modulo: '#',
      inversor: '#',
      controlador: '#',
    };
  } else if ((voltajeSistemaTotal <= 2500) & (voltajeSistemaTotal > 1250)) {
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
      bateria: '#',
      modulo: '#',
      inversor: '#',
      controlador: '#',
    };
  } else if ((voltajeSistemaTotal <= 3750) & (voltajeSistemaTotal > 2500)) {
    volSistm = 36;
    eficienciaInversor = 0.93;
    modulo = {
      potencia: 250,
      Voc: 48.6,
      Isc: 5.48,
    };
    verMas = {
      bateria: '#',
      modulo: '#',
      inversor: '#',
      controlador: '#',
    };
  } else {
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
      bateria: 'https://autosolar.co/pdf/datasheet-tensite-batteries-GEL-12-150.pdf',
      modulo: 'http://www.enersol-sa.com/images/2019/Hoja-de-datos/panel-solar/brightsunpower/PanelSolar-Hoja-tecnica-Monocristalino-BSP-250WSM.pdf',
      inversor: 'https://autosolar.co/pdf/3004270-SPH3000-6000TL-BL-US.pdf',
      controlador: 'https://autosolar.co/pdf/PC1800F.pdf',
    };
  }
}

/* Voltaje del sistema */
function voltajeSistema() {
  vSistemaFinal = voltajeSistemaTotal * 0.2 + voltajeSistemaTotal;
}

/* Consumo total */
function calcular() {
  verificar();
  voltajeSistema();
  calculosModulos();
  calculoBaterias();
  efectsComponentes();
  console.log(vSistemaFinal);
}

function calcVatios() {
  calcular();
  if (validaEnvia() === false) {
  }
}

function efectsComponentes() {
  document
    .querySelector("#seccionComponentes")
    .classList.add("animate__animated", "animate__zoomIn");
}

function inicio() {
  document.getElementById("viewHome").style.display = "block";
  document.getElementById("seccionComponentes").style.display = "none";
  document.getElementById("v/dia").value = "";
  document.getElementById("vTotal").value = "";
  window.location.reload();
  document.getElementById("vTotal").focus();
}
/* function mostrarDetalles() {
  document.getElementById("viewHome").style.display = "none";
  document.getElementById("seccionComponentes").style.display = "none";
  document.getElementById("detallesBateria").style.display = "contents";
} */
function detallesBateria() {
  Swal.fire({
    html:
      "<div class='animate__animated animate__zoomInDown'><h1 style='color:#dc3545;font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>Detalles Baterias</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>Según el consumo de su sistema le recomendamos lo siguiente:</p>" +
      "<ul style='text-align:center;margin:0;padding:0;'><li>Baterias en paralelo: <span style='color:#dc3545'>" +
      bateriasParalelo +
      "</span></li><li>Baterias en serie: <span style='color:#dc3545'>" +
      bateriaSerie +
      "</span></li></ul>" +
      "<br>" +
      "<a href='"+ verMas.bateria + "' target='_blank' type='button' class='btn btn-warning' style='color: #545454;'>Ver mas</a></div>",
  });
}
function detallesModulos() {
  Swal.fire({
    html:
      "<div class='animate__animated animate__zoomInDown'><h1 style='color:#dc3545;font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>Detalles Modulos</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>Según el consumo de su sistema le recomendamos lo siguiente:</p>" +
      "<ul style='text-align:center;margin:0;padding:0;'><li>Modulos en paralelo: <span style='color:#dc3545'>" +
      paraleloModulo +
      "</span></li><li>Modulos en serie: <span style='color:#dc3545'>" +
      seriesModulo +
      "</span></li></ul>" +
      "<br>" +
      "<a href='"+ verMas.modulo + "' target='_blank' type='button' class='btn btn-warning' style='color: #545454;'>Ver mas</a></div>",
  });
}
function detallesInversor() {
  Swal.fire({
    html:
      "<div class='animate__animated animate__zoomInDown'><h1 style='color:#dc3545;font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>Detalles Inversor</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>El Inversor que más se adapta a su consumo ingresado es el siguiente:</p>" +
      "<a href='"+ verMas.inversor + "' target='_blank' type='button' class='btn btn-warning' style='color: #545454;'>Ver mas</a></div>",
  });
}
function detallesControlador() {
  Swal.fire({
    html:
      "<div class='animate__animated animate__zoomInDown'><h1 style='color:#dc3545;font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>Detalles Controlador</h1>" +
      "<hr class='featurette-divider'>" +
      "<p style='text-align:center;font-size:1rem'>El controlador que más se adapta a su consumo ingresado es el siguiente: </p>" +
      "<a href='"+ verMas.controlador + "' target='_blank' type='button' class='btn btn-warning' style='color: #545454;'>Ver Aqui</a></div>",
  });
}