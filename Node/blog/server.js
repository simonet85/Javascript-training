const express = require('express');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const BlogPost = require('./models/BlogPost.js');
const ejs = require('ejs');
const path = require('path');

const app = new express();
const port = 5000;

//Connect Database
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', async (req, res) => {
  //   res.sendFile(path.resolve(__dirname, './pages/index.html'));
  const blogposts = await BlogPost.find({});
  res.render('index', { blogposts });
//   console.log(blogposts)
});

app.get('/contact', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, './pages/contact.html'));
  res.render('contact');
});

app.get('/posts/new', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, './pages/contact.html'));
  res.render('create');
});

//Saving Posts to the Database
app.post('/posts/store', async (req, res) => {
  await BlogPost.create(req.body);
  res.redirect('/');
});

app.get('/about', (req, res) => {
  //   res.sendFile(__dirname, './pages/about.html');
  res.render('about');
});

app.get('/post', (req, res) => {
  //   res.sendFile(__dirname, './pages/post.html');
  res.render('post');
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
