import { REGEX_PATTERNS } from "./expresionesRegulares.js";

validaciones();

export function validaciones() {
  let campos = document.querySelectorAll("form input, form select");

  campos.forEach((campo) => {
    campo.addEventListener("change", (e) => {
      validarCampo(e.target);
    });
    campo.addEventListener("keyup", (e) => {
      validarCampo(e.target);
    });
    campo.addEventListener("blur", (e) => {
      validarCampo(e.target);
    });
  });
}
function validarCampo(input) {
  const valor = input.value.trim();
  let valido = true;
  let mensaje = "";

  switch (input.name) {
    case "tipoId":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      }
      break;
    case "numeroId":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      } else if (!REGEX_PATTERNS.numeroId.test(valor)) {
        valido = false;
        mensaje = "Solo números, entre 6 y 12 dígitos.";
      }
      break;
    case "primerNombre":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      } else if (!REGEX_PATTERNS.primerNombre.test(valor)) {
        valido = false;
        mensaje = "Solo letras, entre 2 y 30 caracteres.";
      }
      break;

    case "segundoNombre":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      } else if (!REGEX_PATTERNS.segundoNombre.test(valor)) {
        valido = false;
        mensaje = "Solo letras, entre 2 y 30 caracteres.";
      }
      break;

    case "primerApellido":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      } else if (!REGEX_PATTERNS.primerApellido.test(valor)) {
        valido = false;
        mensaje = "Solo letras, entre 2 y 30 caracteres.";
      }
      break;

    case "segundoApellido":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      } else if (!REGEX_PATTERNS.segundoApellido.test(valor)) {
        valido = false;
        mensaje = "Solo letras, entre 2 y 30 caracteres.";
      }
      break;

    case "fechaNacimiento":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      } else {
        const [anio, mes, dia] = valor.split("-").map(Number);
        const fecha = new Date(anio, mes - 1, dia);
        const hoy = new Date();

        let edad = hoy.getFullYear() - anio;
        const m = hoy.getMonth() - (mes - 1);
        if (m < 0 || (m === 0 && hoy.getDate() < dia)) {
          edad--;
        }

        if (
          fecha.getFullYear() !== anio ||
          fecha.getMonth() !== mes - 1 ||
          fecha.getDate() !== dia
        ) {
          valido = false;
          mensaje = "La fecha no es válida.";
        } else if (edad < 15) {
          valido = false;
          mensaje = "Debes ser mayor de 15 años.";
        }
      }
      break;
    case "direccion":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      } else if (!REGEX_PATTERNS.direccion.test(valor)) {
        valido = false;
        mensaje = "Formato inválido. Ej: Calle 10 #15-20";
      }
      break;
    case "pais":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      }
      break;

    case "departamento":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      }
      break;

    case "ciudad":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      }
      break;
    case "marca":
      if (valor === "") {
        valido = false;
        mensaje = "Este campo es obligatorio.";
      }
      break;
  }

  mostrarMensaje(input, valido, mensaje);
}

function mostrarMensaje(input, valido, mensaje) {
  input.classList.toggle("incorrecto", !valido);
  input.classList.toggle("correcto", valido);

  let span = input.nextElementSibling;
  if (!span || !span.classList.contains("mensaje-error")) {
    span = document.createElement("span");
    span.classList.add("mensaje-error");
    input.insertAdjacentElement("afterend", span);
  }

  span.textContent = valido ? "" : mensaje;
}

const data = {
  Colombia: {
    Antioquia: ["Medellín", "Envigado", "Bello"],
    Cundinamarca: ["Bogotá", "Soacha", "Chía"],
    "Valle del Cauca": ["Cali", "Palmira", "Buenaventura"],
    Bolívar: ["Cartagena", "Magangué", "Turbaco"],
  }
};

const paisSelect = document.getElementById("pais");
const departamentoSelect = document.getElementById("departamento");
const ciudadSelect = document.getElementById("ciudad");

paisSelect.addEventListener("change", function () {
  const pais = this.value;
  departamentoSelect.innerHTML = '<option value="">Seleccione...</option>';
  ciudadSelect.innerHTML = '<option value="">Seleccione...</option>';
  ciudadSelect.disabled = true;

  if (data[pais]) {
    departamentoSelect.disabled = false;
    Object.keys(data[pais]).forEach(dep => {
      const option = document.createElement("option");
      option.value = dep;
      option.textContent = dep;
      departamentoSelect.appendChild(option);
    });
  } else {
    departamentoSelect.disabled = true;
  }
});

departamentoSelect.addEventListener("change", function () {
  const dep = this.value;
  const pais = paisSelect.value;
  ciudadSelect.innerHTML = '<option value="">Seleccione...</option>';

  if (data[pais] && data[pais][dep]) {
    ciudadSelect.disabled = false;
    data[pais][dep].forEach(city => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      ciudadSelect.appendChild(option);
    });
  } else {
    ciudadSelect.disabled = true;
  }
});

const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const errores = form.querySelectorAll(".incorrecto");
  if (errores.length > 0) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Por favor corrige los errores antes de continuar.",
      iconColor: "#003366",
      confirmButtonColor: "#003366"
    });
  } else {
    Swal.fire({
      icon: "success",
      title: "¡Registro exitoso!",
      text: "Tus datos quedaron guardados correctamente.",
      confirmButtonText: "Aceptar",
      iconColor: "#003366",
      confirmButtonColor: "#003366"
    }).then(() => {
      form.reset();
    });
  }
});