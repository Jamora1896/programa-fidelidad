
import { REGEX_PATTERNS } from "./expresionesRegulares.js";

validaciones();

export function validaciones() {
    let inputs = document.querySelectorAll("form input");

    inputs.forEach((input) => {
        input.addEventListener("keyup", (e) => {
            validarCampo(e.target);
        });
        input.addEventListener("blur", (e) => {
            validarCampo(e.target);
        });
    });
}
function validarCampo(input) {
    const valor = input.value.trim();
    let valido = true;
    let mensaje = "";

    switch (input.name) {
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
                if (
                    fecha.getFullYear() !== anio ||
                    fecha.getMonth() !== mes - 1 ||
                    fecha.getDate() !== dia
                ) {
                    valido = false;
                    mensaje = "La fecha no es válida.";
                }
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

    span.textContent = valido ? "Correcto" : mensaje;
}