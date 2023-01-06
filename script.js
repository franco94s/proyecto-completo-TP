$("#boton").on("click", function(){
  
  if($("#nombre").val() == ""){
    $("#error_nombre").show();
    $("#nombre").addClass("is-invalid");
  }

  if($("#apellido").val() == ""){
    $("#error_apellido").show();
    $("#apellido").addClass("is-invalid");
  }

  if($("#email").val() == ""){
    $("#error_email").show();
    $("#email").addClass("is-invalid");
  }
  if($("#telefono").val() == ""){
    $("#error_telefono").show();
    $("#telefono").addClass("is-invalid");
  }
  if($("#mensaje").val() == ""){
    $("#error_mensaje").show();
    $("#mensaje").addClass("is-invalid");
  }
  
  
})