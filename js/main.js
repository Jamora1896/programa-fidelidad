document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("formularioFidelidad");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se envíe el formulario si hay errores
    let valido = true;
    let mensajesError = [];

    // ✅ Tipo de identificación
    const tipoId = document.getElementById("tipoId");
    if (tipoId.value === "") {
      valido = false;
      mensajesError.push("Seleccione un tipo de identificación.");
    }

    // ✅ Número de identificación (solo números, mínimo 5 caracteres)
    const numeroId = document.getElementById("numeroId").value.trim();
    if (!/^\d{5,}$/.test(numeroId)) {
      valido = false;
      mensajesError.push("El número de identificación debe tener al menos 5 dígitos.");
    }

    // ✅ Primer nombre
    const primerNombre = document.getElementById("primerNombre").value.trim();
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(primerNombre)) {
      valido = false;
      mensajesError.push("El primer nombre solo debe contener letras.");
    }

    // ✅ Segundo nombre
    const segundoNombre = document.getElementById("segundoNombre").value.trim();
    if (segundoNombre !== "" && !/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(segundoNombre)) {
      valido = false;
      mensajesError.push("El segundo nombre solo debe contener letras.");
    }

    // ✅ Apellidos
    const primerApellido = document.getElementById("primerApellido").value.trim();
    const segundoApellido = document.getElementById("segundoApellido").value.trim();
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(primerApellido)) {
      valido = false;
      mensajesError.push("El primer apellido solo debe contener letras.");
    }
    if (!/^[a-zA-ZÁÉÍÓÚáéíóúñÑ\s]+$/.test(segundoApellido)) {
      valido = false;
      mensajesError.push("El segundo apellido solo debe contener letras.");
    }

    // ✅ Fecha de nacimiento (mayor de 18 años)
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;
    if (fechaNacimiento) {
      const hoy = new Date();
      const cumple = new Date(fechaNacimiento);
      let edad = hoy.getFullYear() - cumple.getFullYear();
      const mes = hoy.getMonth() - cumple.getMonth();
      if (mes < 0 || (mes === 0 && hoy.getDate() < cumple.getDate())) {
        edad--;
      }
      if (edad < 18) {
        valido = false;
        mensajesError.push("Debes ser mayor de 18 años.");
      }
    } else {
      valido = false;
      mensajesError.push("Ingrese una fecha de nacimiento.");
    }

    // ✅ Dirección
    const direccion = document.getElementById("direccion").value.trim();
    if (direccion.length < 5) {
      valido = false;
      mensajesError.push("La dirección es demasiado corta.");
    }

    // ✅ Selects obligatorios
    const ciudad = document.getElementById("ciudad").value;
    const departamento = document.getElementById("departamento").value;
    const pais = document.getElementById("pais").value;
    const marca = document.getElementById("marca").value;
    if (ciudad === "" || departamento === "" || pais === "" || marca === "") {
      valido = false;
      mensajesError.push("Debe seleccionar ciudad, departamento, país y marca.");
    }

    // ✅ Aceptar tratamiento de datos
    const acepto = document.getElementById("acepto").checked;
    if (!acepto) {
      valido = false;
      mensajesError.push("Debe aceptar el tratamiento de datos.");
    }

    // 📌 Mostrar mensajes de error o enviar formulario
    if (!valido) {
      mostrarErrores(mensajesError);
    } else {
      limpiarErrores();
      alert("✅ Formulario válido. Listo para enviar al backend.");
      // Aquí luego puedes hacer el fetch a Spring Boot
      // formulario.submit();
    }
  });

  // Función para mostrar errores
  function mostrarErrores(errores) {
    let contenedorError = document.getElementById("errores");
    if (!contenedorError) {
      contenedorError = document.createElement("div");
      contenedorError.id = "errores";
      formulario.prepend(contenedorError);
    }
    contenedorError.innerHTML = "<ul>" + errores.map(e => `<li>${e}</li>`).join("") + "</ul>";
    contenedorError.classList.add("mensajeError");
  }

  // Función para limpiar errores
  function limpiarErrores() {
    let contenedorError = document.getElementById("errores");
    if (contenedorError) contenedorError.innerHTML = "";
  }
});
