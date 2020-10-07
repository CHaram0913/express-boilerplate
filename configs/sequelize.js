const config = require('./index');

module.exports = { [config.ENVIRONMENT]: config.DB };
