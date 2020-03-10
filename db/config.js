module.exports = {
  "development": {
    "username": "payments",
    "password": "qwe123",
    "database": "payments",
    "host": process.env.DB_HOST || "localhost",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  },
  "test": {
    "username": "admin",
    "password": "f45c942e6faf397d23e3371e2ebd02272f9d209d26abefdfdfb",
    "database": "payments",
    "logging": false,
    "host": "2393c55f-7305-4018-9690-6057494e7409.bn2a2vgd01r3l0hfmvc0.databases.appdomain.cloud",
    "port": 31008,
    "dialect": "postgres",
    "seederStorage": "sequelize",
    "dialectOptions": {
      "ssl": true
    }
  },
  "production": {
    "username": "payments",
    "password": "qwe123",
    "database": "payments",
    "logging": false,
    "host": process.env.DB_HOST || "localhost",
    "dialect": "postgres",
    "seederStorage": "sequelize"
  }
};