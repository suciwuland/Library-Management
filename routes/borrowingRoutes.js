const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

// Endpoint untuk membuat peminjaman

router.post('/', borrowingController.createBorrowing);
router.put('/:id/return', borrowingController.returnBook);
router.get('/find', borrowingController.getBorrowingByMemberAndBook);
module.exports = router;
