import { default as express, Express, Request, Response } from 'express';
import { instance as loggerInstance } from '../logger';

export function createServer(): Express {
    const logger = loggerInstance();

    logger.debug('creating server');

    const app = express();

    app.get('/healthcheck', (req: Request, res: Response) => res.send('ok'));

    return app;
}
