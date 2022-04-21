$(function(){
    console.log("Se inicia el archivo quote.js");

    $("#personaFisicaCotizacion").prop( "checked", true );
    $("#containerPersonaMoralCotizacion").hide();

    $('input[type=radio][name=tipoPersonaCotizacion]').change(function() {
        if (this.value == 'personaFisica') {
            $("#containerPersonaFisicaCotizacion").show();
            $("#containerPersonaMoralCotizacion").hide();
        }
        else if (this.value == 'personaMoral') {
            $("#containerPersonaFisicaCotizacion").hide();
            $("#containerPersonaMoralCotizacion").show();
        }
    });

    $("#editaDatosBtn").click(function () {
        var estado = !$("#editaDatosBtn").is(':checked');
        $("#yearRes").prop( "disabled", estado );
        $("#marcaRes").prop( "disabled", estado );
        $("#descripcionRes").prop( "disabled", estado );
        $("#estadoRes").prop( "disabled", estado );
        $("#poblacionRes").prop( "disabled", estado );
    });


});