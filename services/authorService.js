const { saveAuthor, findAllAuthors } = require('../repository/authorRepository');

const createAuthor = async (name) => {
  if (!name || name.trim() === '') {
    throw new Error('Author name is required');
  }
  return await saveAuthor(name);
};

const getAllAuthors = async () => {
  return await findAllAuthors();
};

module.exports = {
  createAuthor,
  getAllAuthors
};