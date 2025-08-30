export const REGEX_PATTERNS = {
    primerNombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,30}$/,
    segundoNombre: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,30}$/,
    primerApellido: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,30}$/,
    segundoApellido: /^[a-zA-ZáéíóúÁÉÍÓÚñÑ]{2,30}$/,
    numeroId: /^\d{6,12}$/,
    fechaNacimiento: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
    direccion:  /^(Calle|Carrera|Av|Avenida)\s+\d+[A-Z]?\s*#\s*\d+\s*[- ]?\s*\d+$/i

};