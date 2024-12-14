const Borrowing = require('../models/borrowing');
const Book = require('../models/book');
const Member = require('../models/member');

const borrowingService = {
  async createBorrowing(bookId, memberId) {
    // Check book stock
    const book = await Book.findByPk(bookId);   
    if (!book) {
        throw new Error('Book not found');
    }
      
    if (book.stock <= 0) {
        throw new Error('Book stock is not available');
    }

    const borrowings = await Borrowing.findAll({ 
        where: { member_id: memberId, status: 'BORROWED' } 
    });

    if (borrowings.length >= 3) {
        throw new Error('Member cannot borrow more than 3 books');
    }

    // Create new borrowing
    const borrowing = new Borrowing({
        book_id: bookId,
        member_id: memberId,
        borrow_date: new Date(),
        status: 'BORROWED',
        created_at: new Date(),
        updated_at: new Date()
    });
      
    // Update book stock
    book.stock -= 1;
    await book.save();

    await borrowing.save();
    return borrowing;
  },

  async findBorrowingByMemberAndBook(memberId, bookId) {
    // Find borrowing record based on member ID and book ID
    const borrowing = await Borrowing.findOne({
        where: {
            member_id: memberId,
            book_id: bookId,
            status: 'BORROWED' // Only consider borrowed books
        }
    });

    if (!borrowing) {
        throw new Error('Borrowing record not found for the given member and book IDs');
    }

    return borrowing;
  },

  processReturn: async (borrowingId) => {
    const borrowing = await Borrowing.findByPk(borrowingId);

    if (!borrowing) {
        throw new Error("Borrowing record not found");
    }

    if (borrowing.status === 'RETURNED') {
        throw new Error("This book has already been returned");
    }

    const book = await Book.findByPk(borrowing.book_id);

    if (!book) {
        throw new Error("Book record not found");
    }

    // Update Borrowing status
    borrowing.status = 'RETURNED';
    borrowing.return_date = new Date();
    await borrowing.save();

    // Update Book stock
    book.stock += 1;
    await book.save();

    return borrowing;
  },
  

};


module.exports = borrowingService;
