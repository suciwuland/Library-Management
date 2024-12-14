// routes/memberRoutes.js

const express = require('express');
const { register,getMembers, searchMembers, getMemberHistory} = require('../controllers/memberController');
const router = express.Router();

router.get('/get', getMembers);
// Endpoint untuk mendaftar anggota baru
router.post('/', register);
router.get('/search',searchMembers);
router.get('/:id/borrowings', getMemberHistory);


module.exports = router;
