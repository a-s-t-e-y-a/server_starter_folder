const loggerConf = require('./logger.conf_dev');

let logger = null;

logger = loggerConf();

module.exports = logger;
