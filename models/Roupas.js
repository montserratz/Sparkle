const { DataTypes } = require('sequelize');
const User = require('./User');
const db = require('../db/conn');

const Roupas = db.define('Roupas', {
  parte_cima: {
    type: DataTypes.STRING,
  },
  parte_baixo: {
    type: DataTypes.STRING,
  },
  calcado: {
    type: DataTypes.STRING,
  },
  acessorio: {
    type: DataTypes.STRING,
  },
});

Roupas.belongsTo(User);
User.hasMany(Roupas);

module.exports = Roupas;
