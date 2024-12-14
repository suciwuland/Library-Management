const { getAllBooks, addBook, getBooks,deleteBookById, searchBooks } = require('../services/bookService');

const Books = async (req, res) => {
  try {
    const books = await getAllBooks();
    res.render('index', { books });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const AllBooks = async (req, res) => {
  try {
    const query = req.query;
    const booksResponse = await getBooks(query);
    res.json(booksResponse);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getBooksForDropdown = async (req, res) => {
  try {
    const books = await getAllBooks();
    res.status(200).json({ books });
  } catch (error) {
    console.error('Error in getBooksForDropdown:', error);
    res.status(500).json({ error: 'Failed to fetch books' });
  }
};


const createBook = async (req, res) => {
  try {
    const { title, author, published_year, stock, isbn } = req.body;
    const newBook = await addBook({ title, author, published_year, stock,isbn });
    res.status(201).json(newBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteBookById(id);
    res.json({ message: 'Book deleted successfully!' });
  } catch (error) {
    console.error('Error deleting book:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};
module.exports = { Books, createBook, AllBooks,searchBooks, deleteBook, getBooksForDropdown };
