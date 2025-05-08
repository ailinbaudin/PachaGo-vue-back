// index.ts
import app from './infrastructure/config/app';
import { config } from './infrastructure/config/config';
import { logger } from './infrastructure/config/logger';

const PORT = config.port || 3000;
const server = app.listen(PORT, () => {
  logger.info(`🚀 Server running in ${config.env} mode on port ${PORT}`);
});

process.on('SIGTERM', () => {
  logger.info('SIGTERM received. Shutting down gracefully');
  server.close(() => logger.info('Process terminated'));
});

process.on('SIGINT', () => {
  logger.info('SIGINT received. Shutting down gracefully');
  server.close(() => logger.info('Process terminated'));
});
