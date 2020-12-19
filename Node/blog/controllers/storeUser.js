const user = require('../models/User.js');
const path = require('path');
const User = require('../models/User.js');

module.exports = (req, res) => {
  User.create(req.body, (error, user) => {
    res.redirect('/');
  });
};
