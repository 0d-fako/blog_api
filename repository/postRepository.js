const Post = require('../models/Post');


const savePost = async (postData) => {
  const post = new Post(postData);
  return await post.save();
};


const findAllPosts = async () => {
  return await Post.find().populate('author', 'name').sort({ createdAt: -1 });
};


const findPostById = async (id) => {
  return await Post.findById(id).populate('author', 'name');
};


const updatePostById = async (id, updateData) => {
  return await Post.findByIdAndUpdate(id, updateData, { new: true }).populate('author', 'name');
};

const deletePostById = async (id) => {
  return await Post.findByIdAndDelete(id);
};

module.exports = {
  savePost,
  findAllPosts,
  findPostById,
  updatePostById,
  deletePostById
};