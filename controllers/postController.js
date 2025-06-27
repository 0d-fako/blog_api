const {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
} = require('../services/postService');


const handleCreatePost = async (req, res) => {
  try {
    const post = await createPost(req.body);
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const handleGetPosts = async (req, res) => {
  try {
    const posts = await getPosts();
    res.json(posts);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
};

const handleGetPostById = async (req, res) => {
  try {
    const post = await getPostById(req.params.id);
    res.json(post);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};


const handleUpdatePost = async (req, res) => {
  try {
    const updated = await updatePost(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};


const handleDeletePost = async (req, res) => {
  try {
    await deletePost(req.params.id);
    res.status(204).send();
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

module.exports = {
  handleCreatePost,
  handleGetPosts,
  handleGetPostById,
  handleUpdatePost,
  handleDeletePost
};