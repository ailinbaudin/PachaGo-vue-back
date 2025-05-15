export const zodName = {
  required: "El nombre es obligatorio",
  invalid_type: "El nombre debe ser una cadena de texto",
  min_length: "El nombre debe tener al menos 2 caracteres",
  max_length: "El nombre no puede tener más de 50 caracteres",
};

export const zodSurname = {
  required: "El apellido es obligatorio",
  invalid_type: "El apellido debe ser una cadena de texto",
  min_length: "El apellido debe tener al menos 2 caracteres",
  max_length: "El apellido no puede tener más de 50 caracteres",
};

export const zodLocation = {
  required: "La ubicación es obligatoria",
  invalid_type: "La ubicación debe ser una cadena de texto",
  min_length: "La ubicación debe tener al menos 2 caracteres",
  max_length: "La ubicación no puede tener más de 100 caracteres",
};

export const zodCvUrl = {
  invalid_type: "La URL del CV debe ser una cadena de texto",
  invalid_format: "La URL del CV no es válida",
};

export const zodJobExperience = {
  invalid_type: "La experiencia debe ser texto",
  min_length: "Debe tener al menos 10 caracteres",
  max_length: "No debe superar los 2000 caracteres",
};

export const zodSkills = {
  required: "Debes ingresar al menos una habilidad",
  item_required: "La habilidad no puede estar vacía",
};

export const zodPreferredJobs = {
  required: "Debes ingresar al menos un trabajo preferido",
  item_required: "El tipo de trabajo no puede estar vacío",
};

export const zodCompletionRate = {
  invalid_type: "Debe ser un número",
  min: "No puede ser menor que 0%",
  max: "No puede ser mayor que 100%",
};
