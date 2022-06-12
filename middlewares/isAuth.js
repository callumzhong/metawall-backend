const jwt = require('jsonwebtoken');
const AppError = require('../helpers/appError');
const catchAsync = require('../helpers/catchAsync');
const User = require('../models/user.model');

const isAuth = catchAsync(async (req, res, next) => {
	// 確認 token 是否存在
	let token;
	if (
		req.headers.authorization &&
		req.headers.authorization.startsWith('Bearer')
	) {
		token = req.headers.authorization.split(' ')[1];
	}

	if (!token) {
		throw new AppError(401, '你尚未登入!');
	}

	// 驗證 token 正確性
	const decoded = await new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
			if (err) {
				reject(err);
			} else {
				resolve(payload);
			}
		});
	});
	const currentUser = await User.findById(decoded.id);

	req.user = currentUser;
	next();
});

module.exports = isAuth;
