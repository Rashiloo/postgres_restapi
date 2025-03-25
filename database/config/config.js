require('dotenv').config();

const commonConfig = {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Permitir certificados autofirmados
    }
  }
};

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    ...commonConfig
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    ...commonConfig
  },
  production: {
    url: process.env.DATABASE_URL,
    ...commonConfig
  }
};


