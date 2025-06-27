const {
  savePost,
  findAllPosts,
  findPostById,
  updatePostById,
  deletePostById
} = require('../repository/postRepository');


const createPost = async (postData) => {
  const { title, body, author } = postData;

  if (!title || !body || !author) {
    throw new Error('Title, body, and author are required');
  }

  return await savePost({ title, body, author });
};


const getPosts = async () => {
  return await findAllPosts();
};

const getPostById = async (id) => {
  const post = await findPostById(id);
  if (!post) throw new Error('Post not found');
  return post;
};


const updatePost = async (id, updateData) => {
  const updated = await updatePostById(id, updateData);
  if (!updated) throw new Error('Post not found or update failed');
  return updated;
};


const deletePost = async (id) => {
  const deleted = await deletePostById(id);
  if (!deleted) throw new Error('Post not found or delete failed');
  return deleted;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost
};