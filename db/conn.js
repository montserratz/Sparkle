const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sparkle', 'root', 'bancodedados', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
