const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const sequelize = require('./config/database');
const bookRoutes = require('./routes/bookRoutes');
const memberRoutes = require('./routes/memberRoutes');
const borrowingRoutes = require('./routes/borrowingRoutes');

const app = express();

// Set view engine dan lokasi folder views
app.set('view engine', 'ejs'); // Gunakan 'ejs' sebagai view engine
app.set('views', path.join(__dirname, 'views')); // Lokasi folder views

app.use(express.urlencoded({ extended: true })); // Middleware untuk URL encoding
app.use(express.json()); // Middleware untuk parsing JSON

app.use(bodyParser.json()); // Middleware untuk body parsing JSON

// Gunakan rute dari routes
app.use('/api/books', bookRoutes);
app.use('/api/members', memberRoutes);
app.use('/api/borrowings', borrowingRoutes);

// Redirect ke endpoint buku di root URL
app.get('/', async (req, res) => {
  res.redirect('/api/books'); // Redirect ke endpoint books
});

// Menjalankan server
sequelize.sync().then(() => {
  console.log('Database connected');
  app.listen(4000, () => console.log('Server is running on port 4000'));
});
