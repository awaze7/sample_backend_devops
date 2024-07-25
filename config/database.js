const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('employees_db', 'root', 'awaze_shaikh', {
  host: '127.0.0.1',
  dialect: 'mysql'
});

module.exports = sequelize;
