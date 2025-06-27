const express = require('express');
const {
  handleCreatePost,
  handleGetPosts,
  handleGetPostById,
  handleUpdatePost,
  handleDeletePost
} = require('../controllers/postController');

const router = express.Router();

router.post('/', handleCreatePost);
router.get('/', handleGetPosts);
router.get('/:id', handleGetPostById);
router.put('/:id', handleUpdatePost);
router.delete('/:id', handleDeletePost);

module.exports = router;