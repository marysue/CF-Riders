const express = require('express');
const path = require('path');
const csurf = require('csurf');
const cookieParser = require('cookie-parser');
const csrfProtection = csurf({ cookie: true });
const logger = require('morgan');
const { cookieConfig, corsOrigin } = require('./config');
const cors = require('cors');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const bicyclesRouter = require('./routes/bicycles');
const clothingRouter = require('./routes/clothing');
const accessoriesRouter = require('./routes/accessories');

const app = express();
//app.use(cors( { origin: "http://localhost:3000" }));
app.use(cors ( { origin: corsOrigin }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(cookieConfig));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/bicycles', bicyclesRouter);
app.use('/clothing', clothingRouter);
app.use('/accessories', accessoriesRouter);

//For deploying to heroku
//The "catchall" handler: for any request that doesn't
//match one of the above, send back to React's index.html file.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname+'/react-app/build/index.html'));
});

module.exports = app;
