const postService = require('../service/post.service');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/appError');
const userService = require('../service/user.service');
const getProfile = catchAsync(async (req, res, next) => {
	res.status(200).json(req.user);
});

const signUp = catchAsync(async (req, res, next) => {
	const { email, password, confirmPassword, name } = req.body;
	if (password !== confirmPassword) {
		throw new AppError(400, '密碼不一致!');
	}
	const result = await userService.signUp({
		email,
		password,
		name,
	});
	res.status(200).json(result);
});

const signIn = catchAsync(async (req, res, next) => {
	const { email, password } = req.body;
	const result = await userService.signIn({ email, password });
	if (typeof result === 'string') {
		throw new AppError(400, result);
	}
	res.status(200).json(result);
});

const updatePassword = catchAsync(async (req, res, next) => {
	const { password, confirmPassword } = req.body;
	if (password !== confirmPassword) {
		throw new AppError(400, '密碼不一致!');
	}
	const result = await userService.updatePassword({
		userId: req.user.id,
		password,
	});

	res.status(200).json(result);
});

const updateProfile = catchAsync(async (req, res, next) => {
	let { email, name } = req.body;
	const user = userService.updateProfile({ userId: req.user.id, email, name });
	res.status(200).json(user);
});

module.exports = {
	getProfile,
	signUp,
	signIn,
	updatePassword,
	updateProfile,
};
