$(function () {
  initDatosContratante();
  initDatosConductor();
  initDatosBeneficiario();

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
});
