const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const { Post } = require('./models');

const app = express();
app.use(express.json());

app.use(cors());



mongoose.connect("mongodb://127.0.0.1/company-introduction");

mongoose.connection.on("connected", () => {
  console.log("Successfully connected to MongoDB");
})

app.get('/', (req, res) => {
  res.send("OK");
});

app.get('/notice', async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
})

app.post('/notice', async (req, res) => {
  const post = await Post.create(req.body);
  res.json(post);
})


app.listen(8080);