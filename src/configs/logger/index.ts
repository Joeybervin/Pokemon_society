import prodLogger from './prodLogger';
import devLogger from './devLogger';
import { Logger } from 'winston';
import morgan from 'morgan'; 

let logger: Logger;

if (process.env.NODE_ENV === 'production') {
  logger = prodLogger();
} else {
  logger = devLogger();
}

const morganMiddleware = morgan(
    ':method :url :status - :response-time ms',
    {
      stream: {
        write: (message: string) => logger.http(message.trim()),
      },
    }
  );

export { logger, morganMiddleware };