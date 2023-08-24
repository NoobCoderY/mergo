import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Assuming you have a User model
    required: true
  },
  comments: [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment', // Assuming you have a User model
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

export const BlogPost = mongoose.model('BlogPost', blogPostSchema);

