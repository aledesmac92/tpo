<script>
  
  function validarFormulario() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var mensaje = document.getElementById("mensaje").value;
  

  var errorMensaje = document.getElementById("error-mensaje");
  
  // Validar que los campos no estén vacíos
  if (nombre === "" || email === "" || mensaje === "") {
    errorMensaje.innerText = "Por favor, completa todos los campos";
    //alert("Por favor, completa todos los campos");
    errorMensaje.style.display = "block";
    return false;
  }
  
  // Validar formato de correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errorMensaje.innerText = "Por favor, ingresa un correo electrónico válido";
    errorMensaje.style.display = "block";
    return false;
  }
  
  // Si todos los campos son válidos, el formulario se envía
  alert("Mensaje enviado");
  return true;
}
</script>