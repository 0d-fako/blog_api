const Author = require('../models/Author');

const saveAuthor = async (name) => {
  const author = new Author({ name: name.trim() });
  return await author.save();
};


const findAllAuthors = async () => {
  return await Author.find().sort({ name: 1 });
};

module.exports = {
  saveAuthor,
  findAllAuthors
};