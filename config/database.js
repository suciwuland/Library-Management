const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('library_management', 'postgres', '12345678', {
  host: 'localhost',
  dialect: 'postgres',
});

sequelize.authenticate()
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection failed:', err));

module.exports = sequelize;
