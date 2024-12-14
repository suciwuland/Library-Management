// models/member.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Member = sequelize.define('Member', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
    
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false
    
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  created_at: { 
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: { 
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'members',
  modelName: 'members',
  timestamps: false
});

module.exports = Member;
