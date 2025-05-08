import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';

import { config } from './config';
import { httpLogStream, logger } from './logger';
import { setupSwagger } from './swagger';

import userRoutes from '../../application/routes/userRoutes';

const app = express();

// Seguridad
app.use(helmet());
app.use(cors(config.corsOptions));

// Rate Limiting
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100,
}));

// Parsing de cuerpo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logging
app.use(morgan('combined', { stream: httpLogStream }));

// Rutas
app.use('/api/users', userRoutes);

// Swagger solo en desarrollo
if (config.env === 'development') {
  setupSwagger(app);

}
export default app;
