const express = require('express');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');
const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const validationMiddleware = require('./middleware/validationMiddleware');
const newPostController = require('./controllers/newPost');
const homeController = require('./controllers/home');
const storePostController = require('./controllers/storePost');
const getPostController = require('./controllers/getPost');
const newUserController = require('./controllers/newUser');
const storeUserController = require('./controllers/storeUser');
const loginController = require('./controllers/login');
const loginUserController = require('./controllers/loginUser');
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware = require('./middleware/redirectIfAuthenticatedMiddleware');
const connectMongo = require('connect-mongo');
const ejs = require('ejs');

const getPost = require('./controllers/getPost');

const app = new express();
const port = 5000;

//Connect Database
connectDB();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./public'));
app.use(fileUpload());
//Applying a middleare to a particular route
app.use('/posts/store', validationMiddleware);
//Applying the express session
const mongoStore = connectMongo(expressSession);
app.use(
  expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    store: new mongoStore({
      mongooseConnection: mongoose.connection,
    }),
  })
);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.get('/', homeController);

app.get('/posts/new', newPostController);
//Navigate to register page
app.get('/auth/register', newUserController);
//Store user data
app.post(
  '/users/register',
  redirectIfAuthenticatedMiddleware,
  storeUserController
);
//User Login
app.get('/auth/login', loginController);
//Logged user in
app.post('/users/login', loginUserController);
//Saving Posts to the Database
app.post('/posts/store', storePostController);

app.get('/post/:id', getPostController);

app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
