export const zodEmail = {
  required: "El email es obligatorio",
  invalid_type: "El email debe ser una cadena de caracteres",
  min_length: "El email debe tener al menos 3 caracteres",
  max_length: "El email no puede tener más de 20 caracteres",

  invalid_chars: "El email contiene caracteres inválidos",
  missing_local: "Falta la parte local (antes del @)",
  missing_domain: "Falta un dominio válido (después del @) con punto",
  invalid_extension:
    "La extensión del dominio debe tener al menos 2 letras (ej: .com)",
  double_dot: "El email no puede contener '..' (puntos dobles)",
};

export const zodPassword = {
  required: "La contraseña es obligatoria",
  invalid_type: "La contraseña debe ser una cadena de texto",
  min_length: "Debe tener al menos 8 caracteres",
  max_length: "No puede superar los 20 caracteres",
  missing_uppercase: "Debe contener al menos una letra mayúscula",
  missing_lowercase: "Debe contener al menos una letra minúscula",
  missing_number: "Debe contener al menos un número",
  missing_symbol: "Debe contener al menos un símbolo especial (!@#$...)",
};

export const zodRole = {
  required: "El rol es obligatorio",
  invalid_type: "El rol debe ser una cadena de texto",
  invalid_value: "El rol no es válido",
};

export const zodPhone = {
  required: "El teléfono es obligatorio",
  invalid_type: "El teléfono debe ser texto",
  invalid_format: "Formato de teléfono inválido",
  min_length: "El teléfono debe tener al menos 8 dígitos",
  max_length: "El teléfono no puede superar los 20 caracteres",
};

export const zodCountry = {
  required: "El país es obligatorio",
  invalid_type: "El país debe ser texto",
  invalid_value: "El pais no es valido",
};


export const zodAbout = {
  invalid_type: "La biografía debe ser texto",
  max_length: "La biografía no puede superar los 1000 caracteres",
};

export const zodProfilePicture = {
  invalid_type: "La URL de la imagen debe ser texto",
  invalid_format: "La URL no es válida",
  invalid_source: "La imagen debe estar alojada en Cloudinary",
};
