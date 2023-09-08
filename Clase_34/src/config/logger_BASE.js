import winston from 'winston'


// Creamos el logger
const logger = winston.createLogger({
    // declaramos transports
    transports: [
        // Consola
        new winston.transports.Console({ level: 'http' }),

        // File
        new winston.transports.File({ filename: './errors.log', level: 'warn' })
    ]
})



export const addLogger = (req, res, next) => {
    // logger
    req.logger = logger
    // req.logger.http('Logger test')

    req.logger.warn(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`)


    req.logger.http(`${req.method} en ${req.url} - at ${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}`);
    next()
}