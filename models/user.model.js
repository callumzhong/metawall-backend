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
			default: '',
		},
		gender: {
			type: String,
			enum: ['male', 'female'],
		},
		password: {
			type: String,
			required: [true, '請輸入密碼'],
			minlength: 8,
			select: false,
		},
		createdAt: { type: Date, select: false },
		updatedAt: { type: Date, select: false },
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
