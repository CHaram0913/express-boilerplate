const { Router } = require('express');

const config = require('../configs');
const { REQUEST_ERRORS } = require('../constants');

const router = Router({ mergeParams: true });

/**
 * ROOT ROUTE FOR HEALTH CHECK
 */
router.get('/', (req, res) => res.success(null, 'API 서버가 정상 가동 중입니다.'));

/**
 * OTHER ROUTERS
 */
// router.use('/users', userRouter);

/**
 * 404 ROUTER
 */
router.use((req, res) => res.status(404).fail(
  REQUEST_ERRORS.UNKNOWN_RESOURCE_URL,
  { url: req.originalUrl },
));

/**
 * SERVER SIDE ERROR (500) ROUTER
 */
router.use((err, req, res, next) => {
  /* istanbul ignore next */
  /* eslint-disable no-console */
  if (config.environment !== 'test') {
    console.error(`\nRequest TS : \x1b[35m${req._startTime}\x1b[0m`);
    console.error(`Request ID : \x1b[36m${req.id}\x1b[0m`);
    console.error(err);
  }

  /* istanbul ignore next */
  res.status(500).fail(REQUEST_ERRORS.SERVER_SIDE_ERROR);

  /* istanbul ignore next */
  return next();
});

module.exports = router;
