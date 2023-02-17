import { initialize as initializeLogger } from "./logger";
import config from './config';

main();

async function main() {
    const logger = initializeLogger(config.logLevel, config.service);
    logger.info('logger initialized');

    try {
        logger.info('running');
    } catch (err: any) {
        logger.error(err.message, { error: err });
    }
}