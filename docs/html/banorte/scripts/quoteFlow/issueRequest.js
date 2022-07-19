$(function () {
  initDatosContratante();
  initDatosConductor();
  initDatosBeneficiario();
  initDatosNuevoContratante();
  enableDisableNcontratante(true);

  function initDatosContratante() {
    $("#personaFisicaContratante").prop("checked", true);
    $("#personaMoralContratanteDiv").hide();

    //Switch tipo persona Contratante
    $("input[type=radio][name=tipoPersonaContratante]").change(function () {
      if (this.value == "personaFisica") {
        $("#personaFisicaContratanteDiv").show();
        $("#personaMoralContratanteDiv").hide();
      } else if (this.value == "personaMoral") {
        $("#personaFisicaContratanteDiv").hide();
        $("#personaMoralContratanteDiv").show();
      }
    });
  }

  function initDatosConductor() {
    $("#personaFisicaConductor").prop("checked", true);
    $("#personaMoralConductorDiv").hide();

    //Switch tipo persona Conductor
    $("input[type=radio][name=tipoPersonaConductor]").change(function () {
      if (this.value == "personaFisica") {
        $("#personaFisicaConductorDiv").show();
        $("#personaMoralConductorDiv").hide();
      } else if (this.value == "personaMoral") {
        $("#personaFisicaConductorDiv").hide();
        $("#personaMoralConductorDiv").show();
      }
    });
  }

  function initDatosBeneficiario(params) {
    $("#personaFisicaBeneficiario").prop("checked", true);
    $("#personaMoralBeneficiarioDiv").hide();

    //Switch tipo persona Beneficiario
    $("input[type=radio][name=tipoPersonaBeneficiario]").change(function () {
      if (this.value == "personaFisica") {
        $("#personaFisicaBeneficiarioDiv").show();
        $("#personaMoralBeneficiarioDiv").hide();
      } else if (this.value == "personaMoral") {
        $("#personaFisicaBeneficiarioDiv").hide();
        $("#personaMoralBeneficiarioDiv").show();
      }
    });
  }

  function initDatosNuevoContratante(params) {
    $("#personaFisicaNuevoContratante").prop("checked", true);
    $("#personaMoralNuevoContratanteDiv").hide();

    //Switch tipo persona Beneficiario
    $("input[type=radio][name=tipoPersonaNuevoContratante]").change(function () {
      if (this.value == "personaFisica") {
        $("#personaFisicaNuevoContratanteDiv").show();
        $("#personaMoralNuevoContratanteDiv").hide();
      } else if (this.value == "personaMoral") {
        $("#personaFisicaNuevoContratanteDiv").hide();
        $("#personaMoralNuevoContratanteDiv").show();
      }
    });
  }


 
    $("#switchNuevoContratante").click(function () {
      var estado = !$("#switchNuevoContratante").is(":checked");
      enableDisableNcontratante(estado);
    });
    
    function enableDisableNcontratante(estado) {
      $("#personaFisicaNuevoContratante").prop("disabled", estado);
      $("#personaMoralNuevoContratante").prop("disabled", estado);
      $("#nombreNContratante").prop("disabled", estado);
      $("#aPaternoNContratante").prop("disabled", estado);
      $("#aMaternoNContratante").prop("disabled", estado);
      $("#fechaNacimientoNContratante").prop("disabled", estado);
      $("#edadNContratante").prop("disabled", estado);
      $("#sexoNContratante").prop("disabled", estado);
      $("#rfcFisicaNContratante").prop("disabled", estado);
      $("#homoclaveNContratante").prop("disabled", estado);
      $("#razonSocialNContratante").prop("disabled", estado);
      $("#fechaConstitucionNContratante").prop("disabled", estado);
      $("#rfcMoralNContratante").prop("disabled", estado);
      $("#representanteLegalNContratante").prop("disabled", estado);
      $("#mailContactoNContratante").prop("disabled", estado);
      $("#celularContactoNContratante").prop("disabled", estado);
      $("#telefonoContactoNContratante").prop("disabled", estado);
      $("#calleNContratante").prop("disabled", estado);
      $("#numExteriorNContratante").prop("disabled", estado);
      $("#numInteriorNContratante").prop("disabled", estado);
      $("#coloniaNContratante").prop("disabled", estado);
      $("#estadoNContratante").prop("disabled", estado);
      $("#poblacionNContratante").prop("disabled", estado);
      $("#cpNContratante").prop("disabled", estado);
    }
  
    $("#btnFormaPago").click(function () {
      location.href = "../quoteFlow/payment.html";
    });


});
