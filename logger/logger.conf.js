const { createLogger, format, transports } = require('winston');

const {
  combine, printf, timestamp,
} = format;

const myFormat = printf(({ message, timestamp, level }) => `${timestamp} [${level}] ${message}`);
function loggerConf() {
  return createLogger({
    level: 'info',
    format: combine(format.colorize(), timestamp({ format: 'HH:mm:ss' }), myFormat),
    // defaultMeta: { service: 'user-service' },
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
      new transports.Console(),
    ],
  });
}
module.exports = loggerConf;
