const Book = require('../models/book');
const getAllBooks = async () => {
  try {
    const books = await Book.findAll();

    // Mendapatkan stok untuk setiap buku dan menentukan ketersediaan
    const booksWithAvailability = books.map(book => {
      const available = book.stock > 0; 
      return { ...book.dataValues, available }; 
    });

    return booksWithAvailability;
  } catch (error) {
    console.error('Error in getAllBooks:', error);
    throw error;
  }
};

const getBooks = async (query) => {
  try {
    const { title, author, page = 1, limit = 10 } = query;

    // Membuat kondisi filter untuk judul dan penulis dengan case-insensitive
    const whereClause = {};
    if (title) {
      whereClause.title = { [Op.iLike]: `%${title}%` };
    }
    if (author) {
      whereClause.author = { [Op.iLike]: `%${author}%` };
    }

    // Mengambil buku dari database dengan filter dan pagination
    const books = await Book.findAll({
      where: whereClause,
      attributes: ['id', 'title', 'author', 'published_year', 'stock', 'isbn'],
      order: [['title', 'ASC']], // Mengurutkan berdasarkan judul buku
      offset: (page - 1) * limit,
      limit: Number(limit),
    });

    // Mendapatkan stok untuk setiap buku dan menentukan ketersediaan
    const total = await Book.count({ where: whereClause });
    const totalPages = Math.ceil(total / limit);

    const booksWithAvailability = books.map(book => {
      const available = book.stock > 0;
      return { ...book.dataValues, available };
    });

    const response = {
      data: booksWithAvailability,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        totalPages,
      }
    };

    return response;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw new Error('Error fetching books: ' + error.message);
  }
};


const searchBooks = async (title, author) => {
  try {
    const query = {};
    if (title) query.title = { [Op.iLike]: `%${title}%` };
    if (author) query.author = { [Op.iLike]: `%${author}%` };

    return await Book.findAll({
      where: query,
      offset: (page - 1) * limit,
      limit: parseInt(limit)
    });
  } catch (error) {
    console.error('Error in searchBooks:', error);
    throw error;
  }
};

const addBook = async ({ title, author, published_year, stock, isbn }) => {
  // Validasi input
  if (!title || !author || !published_year || !stock || !isbn) {
    throw new Error("All fields are required");
  }

  if (typeof published_year !== "number" || published_year < 0) {
    throw new Error("Invalid published year");
  }

  if (typeof stock !== "number" || stock < 0) {
    throw new Error("Stock must be a positive number");
  }
  
  // Simpan buku baru ke database
  const newBook = await Book.create({
    title,
    author,
    published_year,
    stock,
    isbn,
    created_at: new Date(),
    updated_at: new Date()
  });
  await newBook.save();
  return newBook;
};

const deleteBookById = async (id) => {
  const deleted = await Book.destroy({ where: { id } });
  if (!deleted) {
    throw new Error('Book not found');
  }
};
module.exports = { getAllBooks,getBooks, addBook, deleteBookById, searchBooks };
