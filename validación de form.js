const form = document.querySelector("form");
const first_name = document.querySelector("#first_name");
const last_name = document.querySelector("#last_name");
const username = document.querySelector("#username");
const password = document.querySelector("#password");
const confirm_password = document.querySelector("#confirm_password");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (first_name.value === "") {
    alert("Por favor, ingresa tu nombre.");
    return;
  }

  if (last_name.value === "") {
    alert("Por favor, ingresa tu apellido.");
    return;
  }

  if (username.value === "") {
    alert("Por favor, ingresa un nombre de usuario.");
    return;
  }

  if (password.value === "") {
    alert("Por favor, ingresa una contraseña.");
    return;
  }

  if (password.value !== confirm_password.value) {
    alert("La contraseña y su confirmación no coinciden.");
    return;
  }

  // Si todo está bien, envía el formulario.
  form.submit();
});



