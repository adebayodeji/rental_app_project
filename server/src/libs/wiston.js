import winston from 'winston'

process.env.LOG_LEVEL = 'error'

const logger = winston.createLogger({
    level: process.env.LOG_LEVEL,
    transports: [new winston.transports.Console()],
})

global.logger = logger

export default logger
