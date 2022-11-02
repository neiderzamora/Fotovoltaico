let almacenWh = {};
let verMas = {};
let modulo = {};
let bateria = {};
let inversor = {};
let controlador = {};

/* Baterias */
let consumoBateriaDia;
let bateriasParalelo;
let bateriaSerie;
let numBaterias;

/* Modulos */
let numModulo;
let serieModulo;
let paraleloModulo;

let demandaMax;
let consumoDP;
let potenciaFV;
let horaSolar = 4;

function mostrarHibrido() {
  document.getElementById("hibrido").style.display = "flex";
  document.getElementById("viewHome").style.display = "none";
}
function mostrarAutonomo() {
  document.getElementById("viewHome").style.display = "none";
  document.getElementById("autonomo").style.display = "flex";
}
function mostrarInterconectado() {
  document.getElementById("viewHome").style.display = "none";
  document.getElementById("interconectado").style.display = "flex";
}

const select = document.getElementById("fvSelector");

select.addEventListener("change", function () {
  let selectorOpcion = this.options[select.selectedIndex];

  if (selectorOpcion.value == 1) {
    inputHibrido();
  } else if (selectorOpcion.value == 2) {
    inputAutonomo();
  } else if (selectorOpcion.value == 3) {
    inputInterconectado();
  }
});

function inputHibrido() {
  Swal.mixin({
    allowOutsideClick: false,
    showClass: {
      popup: "animate__animated animate__heartBeat",
    },
    hideClass: {
      popup: "animate__animated animate__backOutDown",
    },
    html: `<style>.swal2-styled.swal2-confirm {
      display: block !important;}</style>`,
    input: "number",
    confirmButtonText: "Siguiente",
    showCancelButton: true,
    cancelButtonText: "Cancelar",
    progressSteps: ["1", "2"],
  })
    .queue([
      {
        title: "Consumo total",
        inputPlaceholder: "(Wh/dia)",
      },
      {
        title: "Consumo cargas criticas",
        inputPlaceholder: "(Wh/dia)",
      },
    ])
    .then((result) => {
      if (result.value) {
        const answers = result.value;
        almacenWh.hibrido = answers;
        Swal.fire({
          title: "Datos Guardados",
          icon: "success",
          html: `
          <style>.swal2-styled.swal2-confirm {
            display: block !important;}</style>
        `,
        });
        calcHibrido();
        mostrarHibrido();
        bagHidden();
      }
    });
}

function inputAutonomo() {
  (async () => {
    const { value: vatiosA } = await Swal.fire({
      html: `<style>.swal2-styled.swal2-confirm {
        display: block !important;}</style>`,
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      showClass: {
        popup: "animate__animated animate__heartBeat",
      },
      hideClass: {
        popup: "animate__animated animate__backOutDown",
      },
      title: "Digite consumo total",
      input: "number",
      inputPlaceholder: "(Wh/dia)",
      inputValidator: (vatiosA) => {
        if (!vatiosA) {
          return "Digite un valor!";
        }
      },
    });

    if (vatiosA) {
      almacenWh.autonomo = vatiosA;
      Swal.fire({
        icon: "success",
        title: "Datos guardados",
        html: `<style>.swal2-styled.swal2-confirm {
          display: block !important;}</style>`,
      });
      calcAutonomo();
      mostrarAutonomo();
      bagHidden();
    }
  })();
}

function inputInterconectado() {
  (async () => {
    const { value: vatiosI } = await Swal.fire({
      html: `<style>.swal2-styled.swal2-confirm {
        display: block !important;}</style>`,
      allowOutsideClick: false,
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      showClass: {
        popup: "animate__animated animate__heartBeat",
      },
      hideClass: {
        popup: "animate__animated animate__backOutDown",
      },
      title: "Digite consumo total",
      input: "number",
      inputPlaceholder: "(Wh/dia)",
      inputValidator: (vatiosI) => {
        if (!vatiosI) {
          return "Digite un valor!";
        }
      },
    });

    if (vatiosI) {
      almacenWh.interconectado = vatiosI;
      Swal.fire({
        icon: "success",
        title: "Datos guardados",
        html: `<style>.swal2-styled.swal2-confirm {
          display: block !important;}</style>`,
      });
      calcInterconectado();
      mostrarInterconectado();
      bagHidden();
    }
  })();
}

function bagHidden() {
  const bg = document.querySelector(".bg-dark");
  bg.style.setProperty("background", "url() no-repeat center / cover");
}

function showBag() {
  const bg = document.querySelector(".bg-dark");
  bg.style.setProperty(
    "background",
    "url(./images/background.jpeg) no-repeat center / cover"
  );
}

function limiteExcedido() {
  Swal.fire({
    allowOutsideClick: false,
    title: "Algo ha salido mal",
    icon: "error",
    html: `
    <button type='button' class='btn btn-danger' style='color: #fff;' onclick='inicio(), Swal.close()'>Reintentar</button>
  `,
  });
}
