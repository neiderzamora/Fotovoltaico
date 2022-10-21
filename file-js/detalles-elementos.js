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
        "<a href='" +
        verMas.bateria +
        "' target='_blank' type='button' class='btn btn-dark' style='color: #fff;'>Ver mas</a></div>",
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
        "<a href='" +
        verMas.modulo +
        "' target='_blank' type='button' class='btn btn-dark' style='color: #fff;'>Ver mas</a></div>",
    });
  }
  function detallesInversor() {
    Swal.fire({
      html:
        "<div class='animate__animated animate__zoomInDown'><h1 style='color:#dc3545;font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>Detalles Inversor</h1>" +
        "<hr class='featurette-divider'>" +
        "<p style='text-align:center;font-size:1rem'>El Inversor que más se adapta a su consumo ingresado es el siguiente:</p>" +
        "<a href='" +
        verMas.inversor +
        "' target='_blank' type='button' class='btn btn-dark' style='color: #fff;'>Ver mas</a></div>",
    });
  }
  function detallesControlador() {
    Swal.fire({
      html:
        "<div class='animate__animated animate__zoomInDown'><h1 style='color:#dc3545;font-weight:bold;text-align:center;animation:zoomIn;animation-duration:2s;'>Detalles Controlador</h1>" +
        "<hr class='featurette-divider'>" +
        "<p style='text-align:center;font-size:1rem'>El controlador que más se adapta a su consumo ingresado es el siguiente: </p>" +
        "<a href='" +
        verMas.controlador +
        "' target='_blank' type='button' class='btn btn-dark' style='color: #fff;'>Ver Aqui</a></div>",
    });
  }