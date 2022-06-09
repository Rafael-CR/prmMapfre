$(function () {
  console.log("Se inicia el archivo quote.js");
  initDatosCotizacion();

  function initDatosCotizacion() {
    $("#personaFisicaCotizacion").prop("checked", true);
    $("#containerPersonaMoralCotizacion").hide();

    //Switch tipo persona en Cotizacion
    $("input[type=radio][name=tipoPersonaCotizacion]").change(function () {
      if (this.value == "personaFisica") {
        $("#containerPersonaFisicaCotizacion").show();
        $("#containerPersonaMoralCotizacion").hide();
      } else if (this.value == "personaMoral") {
        $("#containerPersonaFisicaCotizacion").hide();
        $("#containerPersonaMoralCotizacion").show();
      }
    });
  }

  $("#btnCotizar").click(function () {
    location.href = "../quoteFlow/quotationResult.html";
  });

});
