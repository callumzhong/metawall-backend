'use strict';
require('dotenv').config();
require('./connections/main.connection');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const routes = require('./routes');
const errorHandler = require('./middleWares/errorHandler');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const swaggerOptions = require('./swagger-options');
const app = express();
expressJSDocSwagger(app)(swaggerOptions);

process.on('uncaughtException', (err) => {
	console.error('Uncaughted Exception！');
	console.error(err);
	process.exit(1);
});

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/api', routes);

// 404 錯誤
app.use(function (req, res, next) {
	res.status(404).json({
		status: 'error',
		message: '無此路由資訊',
	});
});

// error middleware
app.use(errorHandler);

// 未捕捉到的 catch
process.on('unhandledRejection', (err, promise) => {
	console.error('未捕捉到的 rejection：', promise, '原因：', err);
});

module.exports = app;
