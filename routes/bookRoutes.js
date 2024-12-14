const express = require('express');
const router = express.Router();
const { Books, createBook, searchBooks,AllBooks, deleteBook, getBooksForDropdown } = require('../controllers/bookController');

router.get('/', Books);
router.get('/allbook', AllBooks);
router.get('/getbooks', getBooksForDropdown);

// (Opsional) Rute pencarian buku
router.get('/api/books/search', searchBooks);

router.post('/addbooks', createBook);
router.delete('/delete/:id', deleteBook);
module.exports = router;
