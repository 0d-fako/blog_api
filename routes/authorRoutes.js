const express = require('express');
const {
  handleCreateAuthor,
  handleGetAuthors
} = require('../controllers/authorController');

const router = express.Router();

router.get('/', handleGetAuthors);
router.post('/', handleCreateAuthor);

module.exports = router;