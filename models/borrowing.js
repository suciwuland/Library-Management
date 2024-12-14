const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');
const Book = require('./book');
const Member = require('./member'); // Pastikan model Member telah didefinisikan

class Borrowing extends Model {}

Borrowing.init({
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
  },
  book_id: {
    type: DataTypes.UUID,
    references: {
      model: 'books',
      key: 'id',
    },
    allowNull: false,
  },
  member_id: {
    type: DataTypes.UUID,
    references: {
      model: 'members',
      key: 'id',
    },
    allowNull: false,
  },
  borrow_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'borrowings',
  tableName: 'borrowings',
  timestamps: false,
});

// Definisikan relasi
Borrowing.belongsTo(Book, { foreignKey: 'book_id' });
Borrowing.belongsTo(Member, { foreignKey: 'member_id' });

module.exports = Borrowing;
