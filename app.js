'use strict';
require('dotenv').config();
require('./connections/main.connection');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const ErrorHandler = require('./middlewares/errorHandler');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', routes);

// error middleware
app.use(ErrorHandler);

module.exports = app;
