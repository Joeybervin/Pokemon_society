import express, { Request, Response, Application } from 'express';

import homeRoutes from './routes/home.routes';
import apiRoutes from './routes';
import { logger, morganMiddleware } from './configs/logger';
import path from 'path';
import * as dotenv from 'dotenv'
dotenv.config()


const app: Application = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(express.json());
app.use(morganMiddleware);

app.use('/', homeRoutes);
app.use('/api', apiRoutes);



app.use("*", (req: Request, res: Response) => {
  logger.error('Bad request')
  res.status(500).send('Bad request');
});

// define app port
const port = process.env.PORT || 8081;
app.listen(port, () => {
    logger.info(`App listening on port  http://localhost:${port}`)
  }) 