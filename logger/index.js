const loggerConf = require('./logger.conf');

let logger = null;

logger = loggerConf();

module.exports = logger;
