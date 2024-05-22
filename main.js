$(document).ready(function() {
  $('#contactForm').on('submit', function(event) {
    event.preventDefault();

    let isValid = true;

    function showError(inputId, errorId, message) {
      if ($(inputId).val().trim() === '') {
        $(errorId).text(message);
        isValid = false;
      } else {
        $(errorId).text('');
      }
    }

    showError('#nombre', '#nombreError', 'Por favor ingrese su nombre.');

    showError('#apellido', '#apellidoError', 'Por favor ingrese su apellido.');

    if ($('#email').val().trim() === '') {
      $('#emailError').text('Por favor ingrese su email.');
      isValid = false;
    } else if (!validateEmail($('#email').val().trim())) {
      $('#emailError').text('El correo debe tener el formato abc@dominio.etc.');
      isValid = false;
    } else {
      $('#emailError').text('');
    }

    showError('#mensaje', '#mensajeError', 'Por favor ingrese el mensaje que desee enviar.');

    if (isValid) {
      $('#successMessage').text('Formulario enviado con éxito!! :D.');
    } else {
      $('#successMessage').text('');
    }
  });

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});

function eliminarProducto(event) {
  event.preventDefault();
  const row = event.target.closest('tr');
  row.style.display = 'none';
}

$(document).ready(function () {
  $('.añadir_al_carro').click(function () {
      alert('Producto agregado :D');
  });
});