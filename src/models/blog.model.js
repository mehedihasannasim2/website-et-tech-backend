const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

blogSchema.plugin(toJSON);

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
