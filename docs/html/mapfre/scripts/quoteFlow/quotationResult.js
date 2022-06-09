$(function () {
  $("#editaDatosBtn").click(function () {
    var estado = !$("#editaDatosBtn").is(":checked");
    $("#yearRes").prop("disabled", estado);
    $("#marcaRes").prop("disabled", estado);
    $("#descripcionRes").prop("disabled", estado);
    $("#estadoRes").prop("disabled", estado);
    $("#poblacionRes").prop("disabled", estado);
  });

  $("#btnEmision").click(function () {
    location.href = "../quoteFlow/issueRequest.html";
  });

  
});
function getEmail() {
  let email = prompt("Ingresa el email a donde quieres enviar la información", "");
}
