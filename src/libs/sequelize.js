const pg = require('pg');
const { Sequelize } = require('sequelize');

const  { config } = require('../config/config');
const setupModels = require('./../db/models');
  
const sequelize = new Sequelize(`postgres://${config.dbUser}:${config.dbPassword}@${config.dbHost}:${config.dbPort}/${config.dbName}`, {
  dialectModule: pg
});


sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;