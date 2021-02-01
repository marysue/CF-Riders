const config = require('./'); //by default looks for index.js

const db = config.db;
const username = db.username;
const password = db.password;
const database = db.database;
const host = db.host;
console.log("********************************************");
console.log("config.db: ", config.db);
console.log("db:  ", db);
console.log("username: ", username);
console.log("password: ", password);
console.log("database:  ", database);
console.log("host:  ", host);
console.log("********************************************");
module.exports = {
  development: {
    username,
    password,
    database,
    host,
    dialect: 'postgres',
    seederStorage: 'sequelize',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect:"postgres",
    seederStorage: 'sequelize',
  }
};
