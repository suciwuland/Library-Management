const borrowingService = require('../services/borrowingService');

const borrowingController = {
    // Fungsi untuk membuat peminjaman
    async createBorrowing(req, res) {
        try {
            const { book_id, member_id } = req.body;
            const borrowing = await borrowingService.createBorrowing(book_id, member_id);
            res.status(201).json(borrowing);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    // Fungsi untuk mengembalikan buku
    async returnBook(req, res) {
        const { id } = req.params;

        try {
            const borrowing = await borrowingService.processReturn(id);
            res.status(200).json({
                message: "Book returned successfully",
                borrowing,
            });
        } catch (error) {
            res.status(400).json({
                message: error.message,
            });
        }
    },

    // Fungsi untuk mencari peminjaman berdasarkan anggota dan buku
    async getBorrowingByMemberAndBook(req, res) {
        const { memberId, bookId } = req.query;
    
        try {
            // Panggil layanan untuk mencari peminjaman berdasarkan memberId dan bookId
            const borrowing = await borrowingService.findBorrowingByMemberAndBook(memberId, bookId);
    
            // Jika peminjaman ditemukan, kirim data sebagai JSON dengan status 200
            if (borrowing) {
                res.status(200).json({
                    borrowing,
                });
            } else {
                // Jika tidak ditemukan, kirim pesan error dengan status 404
                res.status(404).json({
                    message: "Borrowing record not found for given member and book IDs.",
                });
            }
        } catch (error) {
            // Tangani error dengan menampilkan pesan kesalahan
            res.status(500).json({
                message: error.message,
            });
        }
    }
    
};

module.exports = borrowingController;