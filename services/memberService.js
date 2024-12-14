const Member = require('../models/member');
const Book = require('../models/book');
const Borrowing = require('../models/borrowing');
const { Op } = require('sequelize');
const axios = require('axios');
async function registerMember({ name, email, phone, address }) {
  if (!name || !email || !phone || !address) {
    throw new Error('All fields are required');
  }

  // Validasi email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error('Invalid email format');
  }

  // Validasi phone format
  const phoneRegex = /^[0-9]{10,15}$/;
  if (!phoneRegex.test(phone)) {
    throw new Error('Invalid phone format');
  }

  // Cek apakah email sudah ada
  const existingEmail = await Member.findOne({ where: { email } });
  if (existingEmail) {
    throw new Error('Email already exists');
  }

  // Membuat member baru
  const member = new Member({
    name,
    email,
    phone,
    address,
    created_at: new Date(),
    updated_at: new Date(),
  });

  await member.save();
  return member;
}


const getAllMembers = async () => {
  try {
    const members = await Member.findAll(); // Gunakan findAll untuk mendapatkan semua data
    return members;
  } catch (error) {
    console.error('Error in getAllMembers:', error);
    throw error;
  }
};
const searchMembersByName = async (name) => {
  try {
      // Cari anggota berdasarkan nama dengan pencarian parsial (LIKE)
      const members = await Member.findAll({
          where: {
              name: {
                  [Op.iLike]: `%${name}%` // Sequelize LIKE query
              }
          },
          attributes: ['id', 'name'] // Hanya ambil ID dan nama
      });
      return members;
  } catch (error) {
      throw new Error('Error searching members: ' + error.message);
  }
};

const getMemberBorrowingHistory = async (memberId, status, page = 1, limit = 10) => {
  try {
    const whereClause = { member_id: memberId };

    // Jika status ada dalam query, tambahkan sebagai kondisi filter
    if (status) {
      whereClause.status = status;
    }

    const borrowingHistory = await Borrowing.findAll({
      where: whereClause,
      include: [
        { model: Book, attributes: ['id', 'title', 'author', 'published_year', 'isbn'] },
        { model: Member, attributes: ['id', 'name'] },
      ],
      order: [['borrow_date', 'DESC']], // Urutkan berdasarkan tanggal peminjaman terbaru
      offset: (page - 1) * limit,
      limit: Number(limit)
    });

    return borrowingHistory;
  } catch (error) {
    console.error('Error fetching borrowing history:', error);
    throw new Error('Error fetching borrowing history: ' + error.message);
  }
};



module.exports = { getMemberBorrowingHistory,registerMember, getAllMembers,searchMembersByName };
