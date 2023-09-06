const log4js  = require('log4js');

const logger = log4js.getLogger();

logger.level = "info";

logger.debug("init app");
logger.info("todo bn");
logger.warn("Falta algo...");
logger.error("algo no esta bn");
logger.fatal("nada bn :( ");

function sumar (x,y){
    return x +y;
}

module.exports = sumar;