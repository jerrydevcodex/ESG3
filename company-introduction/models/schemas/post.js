const { Schema } = require('mongoose');

const PostSchema = new Schema({
  number: {
    type: Number,
    required: true,
  }
  ,
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: false,
  }
}, {
  timestamps: true,
})

module.exports = PostSchema;