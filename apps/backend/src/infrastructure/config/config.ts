interface Config {
    env: 'development' | 'production' | 'test';
    port: number;
    corsOptions: {
      origin: string[];
      methods: string[];
    };
    rateLimit: {
      windowMs: number;
      max: number;
    };
  }
  
  export const config: Config = {
    env: (process.env.NODE_ENV as any) || 'development',
    port: parseInt(process.env.PORT || '3000'),
    corsOptions: {
      origin: process.env.CORS_ORIGIN?.split(',') || ['*'],
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
    },
    rateLimit: {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 100, // limit each IP
    },
  };