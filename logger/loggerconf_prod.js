const { createLogger, format, transports } = require('winston');

const {
  combine, printf, timestamp,
} = format;

const myFormat = printf(({ message, timestamp, level }) => `${timestamp} [${level}] ${message}`);
function loggerConfProd() {
  return createLogger({
    level: 'http',
    format: combine(format.colorize(), timestamp({ format: 'HH:mm:ss' }), myFormat),
   
    transports: [
   
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'error.log', level: 'warn' }),
        new winston.transports.File({ filename: 'error.log', level: 'info' }),
        new winston.transports.File({ filename: 'error.log', level: 'http' }),
        new winston.transports.File({ filename: 'combined.log' }),
    ],
  });
}
module.exports = loggerConfProd;
