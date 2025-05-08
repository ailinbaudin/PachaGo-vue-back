import winston from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import { config } from './config';

// Definición de niveles y colores
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  debug: 4
};

const colors = {
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  debug: 'blue'
};

winston.addColors(colors);

// Formato para consola (legible para humanos)
const consoleFormat = winston.format.combine(
  winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
  winston.format.colorize({ all: true }),
  winston.format.printf(
    (info) => `${info.timestamp} [${info.level}]: ${info.message}`
  )
);

// Formato para archivos (JSON estructurado)
const fileFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json(),
  winston.format.errors({ stack: true })
);

// Transportes (destinos del log)
const transports = [
  // Consola (solo en desarrollo)
  new winston.transports.Console({
    level: 'debug',
    format: consoleFormat,
    silent: config.env === 'test' // Silencia en tests
  }),
  // Archivo rotativo para errores
  new DailyRotateFile({
    filename: 'logs/error-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    level: 'error',
    maxSize: '20m',
    maxFiles: '30d',
    format: fileFormat
  }),
  // Archivo rotativo para todos los logs
  new DailyRotateFile({
    filename: 'logs/combined-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxSize: '20m',
    maxFiles: '30d',
    format: fileFormat
  })
];

// Logger principal
export const logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  levels,
  transports,
  exceptionHandlers: [
    new DailyRotateFile({
      filename: 'logs/exceptions-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '30d'
    })
  ],
  rejectionHandlers: [
    new DailyRotateFile({
      filename: 'logs/rejections-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxSize: '20m',
      maxFiles: '30d'
    })
  ]
});

// Stream para Morgan (logs HTTP)
export const httpLogStream = {
  write: (message: string) => logger.http(message.trim())
};

// Interface TypeScript para inyección de dependencias
export interface AppLogger {
  error(message: string, meta?: unknown): void;
  warn(message: string, meta?: unknown): void;
  info(message: string, meta?: unknown): void;
  http(message: string, meta?: unknown): void;
  debug(message: string, meta?: unknown): void;
}