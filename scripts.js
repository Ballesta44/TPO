


function validoFormulario() {
    let nombre = document.forms["formulario"]["nombre"].value
    let apellido = document.forms["formulario"]["apellido"].value
    let pais = document.forms["formulario"]["pais"].value
    let ciudad = document.forms["formulario"]["ciudad"].value
    let telefono = document.forms["formulario"]["telefono"].value
    let email = document.forms["formulario"]["email"].value
    if (nombre == "") {
      alert("Debe completar su nombre");
      document.forms["formulario"]["nombre"].focus()
      return false;
    }
    if (apellido == "") {
        alert("Debe completar su apellido");
        document.forms["formulario"]["apellido"].focus()
        return false;
      }
      if (pais == "") {
        alert("Debe completar su pais");
        document.forms["formulario"]["pais"].focus()
        return false;
      }
      if (ciudad == "") {
        alert("Debe completar su ciudad");
        document.forms["formulario"]["ciudad"].focus()
        return false;
      }
      if (telefono == "") {
        alert("Debe completar su telefono");
        document.forms["formulario"]["telefono"].focus()
        return false;
      }
      if (email == "") {
        alert("Debe completar su email");
        document.forms["formulario"]["email"].focus()
        return false;
      }
  }


  