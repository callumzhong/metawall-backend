const Post = require('../models/post.model');
const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateSendJWT = (user) => {
	const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_DAY,
	});
	user.password = undefined;

	return {
		token,
		name: user.name,
	};
};

const signUp = async ({ email, password, name }) => {
	const hashed = await bcrypt.hash(password, 12);
	const user = await User.create({ email, password: hashed, name });
	const createdToken = generateSendJWT(user);
	return createdToken;
};

const signIn = async ({ email, password }) => {
	const user = await User.findOne({ email }).select('+password');
	const auth = await bcrypt.compare(password, user.password);
	if (!auth) {
		return '您的密碼不正確';
	}
	const createdToken = generateSendJWT(user);
	return createdToken;
};

const updatePassword = async ({ password, userId }) => {
	const newPassword = await bcrypt.hash(password, 12);
	const user = await User.findByIdAndUpdate(userId, {
		password: newPassword,
	});
	const createdToken = generateSendJWT(user);
	return createdToken;
};

const updateProfile = async ({ userId, email, name }) => {
	const update = {};
	if (email) {
		update.email = email;
	}
	if (name) {
		update.name = name;
	}
	const user = await User.findByIdAndUpdate(userId, update);
	return user;
};
module.exports = {
	signUp,
	signIn,
	updatePassword,
	updateProfile,
};
