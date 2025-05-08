
# 🧠 Backend Monolítico Modular - PachaGo

Este proyecto implementa un backend monolítico con una arquitectura modular basada en capas (inspirada en la Clean Architecture). Usa Express y TypeScript para la construcción de APIs robustas y mantenibles.

## 📁 Estructura del proyecto

```
apps/backend/
├── src/
│   ├── application/       # 🎮 Controladores, rutas, middlewares
│   ├── domain/            # 🏛️ Entidades y lógica de negocio pura
│   ├── infrastructure/    # 🛠️ Configuración, base de datos, implementación de repos
│   └── index.ts           # 🚀 Punto de entrada del servidor
├── package.json
├── tsconfig.json
```

---

## 🚀 Cómo levantar el servidor

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/PachaGo-vue-back.git
cd PachaGo-vue-back/apps/backend
```

### 2. Instalar dependencias
Si usás **pnpm**:
```bash
pnpm install
```

(Alternativa con npm: `npm install` o con yarn: `yarn`)

### 3. Ejecutar el servidor en modo desarrollo
```bash
pnpm dev
```

Esto utilizará `ts-node-dev` para correr el servidor con recarga automática.

---

## 🛠 Scripts disponibles

| Comando        | Descripción                                      |
|----------------|--------------------------------------------------|
| `pnpm dev`     | Ejecuta el servidor en modo desarrollo (`ts-node-dev`) |
| `pnpm build`   | Compila el proyecto a JavaScript en `/dist`     |
| `pnpm start`   | Ejecuta el proyecto compilado (`node dist/`)    |

---

## 🌐 Endpoint de prueba

Una vez levantado el servidor:

```
GET http://localhost:3000/api/users/123
```

Respuesta esperada:
```json
{
  "id": "123",
  "name": "Usuario de ejemplo"
}
```

---

## ✅ Requisitos

- Node.js >= 18
- pnpm (recomendado) o npm/yarn
- TypeScript instalado globalmente (opcional)

---

## 📌 Notas

- La estructura está lista para escalar con nuevas entidades, servicios, controladores y rutas.
- Se puede extender fácilmente para usar una base de datos (ej. PostgreSQL con Prisma o MongoDB con Mongoose).

---
