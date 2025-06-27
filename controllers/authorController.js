const {
  createAuthor,
  getAllAuthors
} = require('../services/authorService');


const handleCreateAuthor = async (req, res) => {
  try {
    const { name } = req.body;
    const author = await createAuthor(name);
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const handleGetAuthors = async (req, res) => {
  try {
    const authors = await getAllAuthors();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch authors' });
  }
};

module.exports = {
  handleCreateAuthor,
  handleGetAuthors
};