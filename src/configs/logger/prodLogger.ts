import winston from 'winston';

const prodLogger =() => {
    return  winston.createLogger({
        level: 'info', // debug ?
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.label({ label: 'dev' }),
            winston.format.timestamp({format: 'DD-MM-YYYY - HH:mm:ss'}),
            winston.format.printf(({level,label, message, timestamp}) => {
                return `${timestamp} [ ${level.toUpperCase()} ] - ${label} : ${message}`
            })
        ),
        transports: [
            new winston.transports.File({ filename: './src/configs/.logs/app.log', level: 'info' }),
            new winston.transports.File({ filename: './src/configs/.logs/error.log', level: 'error' })
        ],
    // exceptionHandlers: [
    //     new winston.transports.File({ filename: './src/configs/logs/exceptions.log' })
    // ],
    // rejectionHandlers: [
    //     new winston.transports.File({ filename: './src/configs/logs/rejections.log' })
    // ]
})}

export default prodLogger;