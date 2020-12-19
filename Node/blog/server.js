const express = require('express');
const fileUpload = require('express-fileupload');
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
app.use(fileUpload());

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

//Custom MiddleWare
const validateMiddleWare = (req, res, next) => {
  if (req.files == null || req.body.title == null || req.body.body == null) {
    return res.redirect('/posts/new');
  }
  next();
};
//Applying a middleare to a particular route
app.use('/posts/store', validateMiddleWare);

//Saving Posts to the Database
app.post('/posts/store', (req, res) => {
  let image = req.files.image;
  image.mv(path.resolve(__dirname, 'public/img', image.name), async (error) => {
    await BlogPost.create({ ...req.body, image: '/img/' + image.name });
    res.redirect('/');
  });
});

app.get('/about', (req, res) => {
  //   res.sendFile(__dirname, './pages/about.html');
  res.render('about');
});

app.get('/post/:id', async (req, res) => {
  //   res.sendFile(__dirname, './pages/post.html');
  //   res.render('post');
  const blogpost = await BlogPost.findById(req.params.id);
  res.render('post', { blogpost });
});

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
