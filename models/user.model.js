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
