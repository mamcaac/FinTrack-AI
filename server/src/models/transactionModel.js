const { Sequelize, DataTypes } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB_PATH,
});

const Transaction = sequelize.define('Transaction', {
  amount: { type: DataTypes.FLOAT, allowNull: false },
  method: { type: DataTypes.STRING, allowNull: false },
  timestamp: { type: DataTypes.STRING, allowNull: false },
});

sequelize.sync();

module.exports = Transaction;