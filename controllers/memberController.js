
const { registerMember, getAllMembers, searchMembersByName, getMemberBorrowingHistory } = require('../services/memberService');

const register = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const newMember = await registerMember({ name, email, phone, address });
    res.status(201).json(newMember);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMembers = async (req, res) => {
  try {
    const members = await getAllMembers(); // Panggil fungsi untuk mendapatkan data anggota
    res.status(200).json({ members }); // Kirimkan data dalam format JSON
  } catch (error) {
    console.error('Error in getMembers:', error);
    res.status(500).json({ error: 'Failed to fetch members' });
  }
};
const searchMembers = async (req, res) => {
  try {
      const { name } = req.query; // Ambil nama dari query parameter
      if (!name) {
          return res.status(400).json({ error: 'Name query parameter is required' });
      }
      const members = await searchMembersByName(name);
      res.json(members); // Kembalikan hasil pencarian dalam bentuk JSON
  } catch (error) {
      console.error('Error searching members:', error);
      res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};
const getMemberHistory = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, page, limit } = req.query; // Ambil status, page, dan limit dari query

    // Memanggil fungsi dengan parameter status dari query
    const borrowingHistory = await getMemberBorrowingHistory(id, status, page, limit);
    res.json(borrowingHistory);
  } catch (error) {
    console.error('Error fetching borrowing history:', error);
    res.status(500).json({ error: error.message || 'Internal Server Error' });
  }
};

module.exports = {register, getMembers,searchMembers, getMemberHistory };