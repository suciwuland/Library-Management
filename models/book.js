const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  published_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  isbn: {
    type: DataTypes.STRING,
    allowNull: false,
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
  tableName: 'books',
  modelName: 'books',
  timestamps: false, 
});

module.exports = Book;
