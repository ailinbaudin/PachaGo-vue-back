import express, { Express, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import morgan from "morgan";
import path from "path";
import cors from "cors";

import { routes } from "../../routes/index.routes";
// import { routes } from "@/_common/routes";
// import { getRoutes, SDok230_230 } from "../security";

//? Async Initial Methods:
export const asyncInitial = async () => {

};
//% Initial Methods:
const server: Express = express();
server.use(cors());

server.use(express.static(path.join(__dirname, "public")));
// server.name = "API";

server.use(bodyParser.urlencoded({ extended: true, limit: "100mb" }));
server.use(bodyParser.json({ limit: "100mb" }));
server.use(cookieParser());
// DEBUG
server.use(morgan("dev"));
server.use((req: Request, res: Response, next: NextFunction) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header(
    "Access-Control-Allow-Methods",
    "GET, PATCH, POST, OPTIONS, PUT, DELETE"
  );
  next();
});

server.use("/", routes);

//$ ERROR CATCHING.
server.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

//$ END.



export default server;
