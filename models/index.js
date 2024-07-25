'use strict';

const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    port: process.env.DB_PORT,
    logging: false, // Set to true to see SQL queries in console
  }
);

const db = {};

// Import models
db.BasicEmployeeDetail = require('./basicEmployeeDetail')(sequelize, Sequelize.DataTypes);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
