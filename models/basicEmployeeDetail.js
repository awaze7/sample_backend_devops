'use strict';
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Ensure the path is correct

class BasicEmployeeDetail extends Model {}

BasicEmployeeDetail.init({
  first_name: {
    type: DataTypes.STRING,
    allowNull: false, // This ensures the field cannot be null
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  position: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'BasicEmployeeDetail',
  tableName: 'basic_employee_detail',
  timestamps: false, // Disable timestamps if not used
});

module.exports = BasicEmployeeDetail;
