const express = require('express');
const bcrypt = require("bcryptjs");
const { check } = require('express-validator');
const { handleValidationErrors, asyncHandler } = require('../utils');
const { getUserToken } = require('../auth')
const db = require('../db/models');
const { token } = require('morgan');
const { User } = db;

const router = express.Router();

const validateEmailAndPassword = [
  check('name')
    .exists( { checkFalsy: true })
    .withMessage('Please provide a username')
    .isLength( { max: 100 })
    .withMessage('Username must not be more than 100 characters')
    .custom((value) => {
      return db.User.findOne( { where: { name: value } })
          .then((user) => {
            if (user) {
              return Promise.reject('The provided username is already in use by another account');
            }
          })
        }),

  check('emailAddress')
          .isEmail()
          .withMessage('Please provide a valid email.')
          .isLength({ max: 100 })
          .withMessage('Email Address must not be more than 100 characters long')
          .custom ((value) => {
            return db.User.findOne({ where: {emailAddress: value } })
            .then((user) => {
              if (user) {
                return Promise.reject('The provided Email Address is already in use by another acount');
              }
            })
          }),
  check('password')
        .exists( { checkFalsy: true } )
        .withMessage('Please provide a password.')
        .isLength( {min: 8 })
        .withMessage('Password must be at least 8 characters long.')
        .isLength( {max: 100 })
        .withMessage('Password must not be more than 100 characters.'),
  check('confirmPassword')
        .exists( { checkFalsy: true } )
        .withMessage('Please confirm your password.')
        .isLength( { max: 100 })
        .withMessage('Confirm password must not be more than 100 characters long')
        .custom((value, { req } ) => {
          if (value !== req.body.password) {
            throw new Error('Confirm Password does not match Password');
          }
          return true;
        })
    ]


/* create user with hashed password */
router.post(
  "/",
  validateEmailAndPassword,
  handleValidationErrors,
  asyncHandler
  (async (req, res) => {
    console.log("Made it to this route!!!", req.body);
    const { name, emailAddress, password, avatarURL } = req.body;
    const passwordHash = await bcrypt.hash(password, 10);
    const user = await User.create({ name, emailAddress, passwordHash, avatarURL });
    const token = getUserToken(user);
    res.status(201).json({
      user: { id: user.id },
      token,
    });
  })
);

router.post(
  "/token", validateEmailAndPassword, handleValidationErrors,
  asyncHandler(async (req, res, next) => {
    const { emailAddress, password } = req.body;
    const user = await User.findOne({
      where: {
        emailAddress,
      },
    });

    //Password validation and error handling
    // if (!user || !user.validatePassword(password)) {
    //   const err = new Error("Login failed");
    //   err.status = 401;
    //   err.title = "Login failed";
    //   err.errors = ["The provided credentials were invalid."];
    //   return next(err);
    // }

    // Token generation
    const token = getUserToken(user);
    res.cookie('accessToken', `${token}`, { httpOnly: true })
    res.json({ token, user: { id: user.id } });
  })
);

router.post('/logout', (req, res) => {
  res.clearCookie('accessToken')
  res.status('200').end()
});

module.exports = router;
