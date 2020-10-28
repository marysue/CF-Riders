const express = require('express');
const path = require('path');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const csrfProtection = csurf({ cookie: true });
const logger = require('morgan');
const { cookieConfig } = require('./config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(cookieConfig));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
