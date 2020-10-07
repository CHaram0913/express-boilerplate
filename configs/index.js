require('dotenv').config();

const ENVIRONMENT = process.env.NODE_ENV || 'development';

const baseConfig = {
  ENVIRONMENT,
};

const config = {
  development: {
    SERVER: {
      port: process.env.API_SERVER_PORT_DEVELOPMENT,
    },
    WEB: {
      host: process.env.WEB_SERVER_HOST_DEVELOPMENT,
      localhost: process.env.WEB_SERVER_HOST_LOCAL,
    },
    DB: {
      dialect: 'postgres',
      database: process.env.DB_DATABASE_DEVELOPMENT,
      replication: {
        read: [{
          host: process.env.READ_DB_HOST_DEVELOPMENT,
          username: process.env.READ_DB_USER_DEVELOPMENT,
          password: process.env.READ_DB_PASSWORD_DEVELOPMENT,
        }],
        write: {
          host: process.env.WRITE_DB_HOST_DEVELOPMENT,
          username: process.env.WRITE_DB_USER_DEVELOPMENT,
          password: process.env.WRITE_DB_PASSWORD_DEVELOPMENT,
        },
      },
      logging: false,
      define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    },
    REDIS: {
      host: process.env.REDIS_HOST_DEVELOPMENT,
    },
  },
  test: {
    DB: {
      dialect: 'postgres',
      database: process.env.DB_DATABASE_TEST,
      host: process.env.DB_HOST_TEST,
      username: process.env.DB_USER_TEST,
      password: process.env.DB_PASSWORD_TEST,
      logging: false,
      define: {
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
      },
    },
    REDIS: {
      host: process.env.REDIS_HOST_TEST,
    },
  },
};

module.exports = {
  ...baseConfig,
  ...config[ENVIRONMENT],
};
