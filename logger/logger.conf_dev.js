const { createLogger, format, transports } = require('winston');

const {
  combine, printf, timestamp,
} = format;

const myFormat = printf(({ message, timestamp, level }) => `${timestamp} [${level}] ${message}`);
function loggerConf() {
  return createLogger({
    level: 'info',
    format: combine(format.colorize(), timestamp({ format: 'HH:mm:ss' }), myFormat),

    transports: [

      new transports.Console(),
    ],
  });
}
module.exports = loggerConf;
