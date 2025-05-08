import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "PachaGo API",
      version: "1.0.0",
      description: "Documentación de la API de PachaGo",
    },
    servers: [ 
      {
        url: "http://localhost:3000/api/v1",
        description: "Servidor local (desarrollo)",
      },
      {
        url: "https://api.pachago.com/v1",
        description: "Servidor de producción",
      },
    ],
    paths: {},
  },
  apis: ["src/application/routes/*.ts"], 
};

const swaggerSpec = swaggerJSDoc(options);

export function setupSwagger(app: Express) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}