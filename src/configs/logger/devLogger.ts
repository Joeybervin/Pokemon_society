import winston from 'winston';

const devLogger =() => {
    return  winston.createLogger({
        level: 'debug',
        format: winston.format.combine(
            // winston.format.colorize(),
            winston.format.timestamp({format: 'DD-MM-YYYY - HH:mm:ss'}),
            winston.format.printf(({level, message, timestamp}) => {
                return `[${timestamp}] ${level.toUpperCase()} : ${message}`
            })
        ),
        transports: [
            new winston.transports.Console({format: winston.format.combine(
                winston.format.colorize({ all: true })
            )}),
        ],
    // exceptionHandlers: [
    //     new winston.transports.File({ filename: './src/configs/logs/exceptions.log' })
    // ],
    // rejectionHandlers: [
    //     new winston.transports.File({ filename: './src/configs/logs/rejections.log' })
    // ]
})}

export default devLogger;