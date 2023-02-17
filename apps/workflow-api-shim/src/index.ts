import { initialize as initializeLogger } from "./logger";
import { createServer } from "./server";
import config from './config';

main();

async function main() {
    const logger = initializeLogger(config.logLevel, config.service);
    logger.info('logger initialized');

    try {
        const app = createServer();

        await app.listen(config.port);
        logger.info('server is listening', { config });
    } catch (err: any) {
        logger.error(err.message, { error: err });
    }
}