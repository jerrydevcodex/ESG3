const { Schema } = require('mongoose');

const PostSchema = new Schema({
  number: {
    type: Number,
    required: false,
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
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
})

module.exports = PostSchema;