'use strict';
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];
const db = {};
let sequelize;
//heroku sequelize needs ssl=true
if (config.use_env_variable) {
  //DATABASE_URL = config vars on heroku
  //config is the rest of the configurations, like psql, seederStorage;
  //sequelize = new Sequelize(process.env[config.use_env_variable], config);
  sequelize = new Sequelize('postgres://rvuikfovzzjjnr:95763ea576b7ef5569bc2f953b9901348fb14bcc3c17295fecf2531828a66277@ec2-52-54-174-5.compute-1.amazonaws.com:5432/d2ebop2ip064c1', {
    use_env_variable: 'DATABASE_URL',
    dialect:"postgres",
    seederStorage: 'sequelize',
    ssl: {
      rejectUnauthorized: false
    },
    dialectOptions: {
      'ssl':true
    }
  });
} else {
  //We are not running in production, so use the locally defined db credentials
  sequelize = new Sequelize(config.database, config.username, config.password, config );
}
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
