const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const expressIp = require('express-ip');
const expressRequestId = require('express-request-id');
const helmet = require('helmet');
const http = require('http');

const config = require('./configs');
const router = require('./routes');

/**
 * SERVER CONFIG
 */
const app = express();
const server = http.createServer(app);

/**
 * SET MIDDLEWARES
 */
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({
  origin: [config.WEB.host, config.WEB.localhost],
  credentials: true,
}));
app.use(expressIp().getIpInfoMiddleware);
app.use(expressRequestId());

/**
 * SET CUSTOM MIDDLEWARES
 */
app.use(router);

/**
 * LISTEN
 */
if (config.environment !== 'test') {
  server.listen(config.SERVER.port, () => {
    /* eslint-disable no-console */
    console.log(`API server listening on port ${config.SERVER.port}.`);
  });
}

module.exports = app;
