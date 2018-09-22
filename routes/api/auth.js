const express = require('express');
const router = express.Router();

// Item Model
const Users = require('../../models/auth');
const Usersession = require('../../models/session');

// @route Post api/auth/signup
// @desc Create a new user
// @access Public
router.post('/signup', (req, res) => {
  const { body } = req;
  const { Email, Username, Password, Birthday } = body;
  const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!Username) {
    return res.send({
      success: false,
      message: "Error: Username can't be black"
    });
  }
  if (!Email) {
    return res.send({
      success: false,
      message: "Error: Email can't be black"
    });
  }
  if (!Password) {
    return res.send({
      success: false,
      message: "Error: Password can't be black"
    });
  }
  if (!Birthday) {
    return res.send({
      success: false,
      message: "Error: Date name can't be black"
    });
  }
  body.Email = body.Email.toLowerCase();
  if (!EMAIL_REGEX.test(Email)) {
    return res.send({
      seccess: false,
      message: 'Error: Please Enter Valid Email'
    });
  }
  Users.find(
    {
      Email: Email
    },
    (err, previousUsers) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      } else if (previousUsers.length > 0) {
        return res.send({
          success: false,
          message: 'Error: Email Already exist'
        });
      }

      const newUser = new Users();

      newUser.Email = Email;
      newUser.Username = Username;
      newUser.Birthday = Birthday;
      newUser.Password = newUser.generateHash(Password);

      newUser.save((err, user) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error '
          });
        } else {
          return res.send({
            success: true,
            message: 'signup'
          });
        }
      });
    }
  );
});

// @route Post api/auth/signin
// @desc Login
// @access Public
router.post('/signin', (req, res) => {
  const { body } = req;
  const { Password } = body;
  let { Email } = body;
  if (!Email) {
    return res.send({
      success: false,
      message: "Error: Email can't be black"
    });
  }
  if (!Password) {
    return res.send({
      success: false,
      message: "Error: password name can't be black"
    });
  }
  Email = Email.toLowerCase();
  Users.find(
    {
      Email: Email
    },
    (err, user) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      if (user.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Email Invalid'
        });
      }
      const users = user[0];
      if (!users.validPassword(Password)) {
        return res.send({
          success: false,
          message: 'Error: Password Invalid'
        });
      }

      const usersession = new Usersession();
      usersession.userId = users._id;
      usersession.save((err, doc) => {
        if (err) {
          return res.send({
            success: false,
            message: 'Error: server error'
          });
        }
        return res.send({
          success: true,
          message: 'Valid sign in',
          token: doc._id
        });
      });
    }
  );
});

// @route Post api/auth/verify
// @desc Login
// @access Public
router.get('/verify', (req, res) => {
  const { query } = req;
  const { token } = query;
  Usersession.find(
    {
      _id: token
    },
    (err, session) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      if (session.length != 1) {
        return res.send({
          success: false,
          message: 'Error: Cant find token'
        });
      } else {
        return res.send({
          success: true,
          message: 'Token accepted'
        });
      }
    }
  );
});

// @route Post api/auth/logout
// @desc Logout
// @access Public
router.get('/logout', (req, res) => {
  const { query } = req;
  const { token } = query;
  Usersession.findOneAndDelete(
    {
      _id: token
    },
    (err, session) => {
      if (err) {
        return res.send({
          success: false,
          message: 'Error: Server error'
        });
      }
      if (!session) {
        return res.send({
          success: false,
          message: 'Error: Cant find session'
        });
      } else {
        return res.send({
          success: true,
          message: 'Delete complete'
        });
      }
    }
  );
});
module.exports = router;
