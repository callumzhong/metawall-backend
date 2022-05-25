const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, '請填寫名字'],
		},
		email: {
			type: String,
			required: [true, '請填寫email'],
			unique: true,
			lowercase: true,
			select: false,
		},
		photo: {
			type: String,
			default: null,
		},
		createdAt: {
			type: Date,
			default: Date.now,
			select: false,
		},
	},
	{
		versionKey: false,
	},
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
