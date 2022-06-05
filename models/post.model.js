const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema(
	{
		content: {
			type: String,
			required: [true, '請填寫內容'],
		},
		image: {
			type: String,
			default: '',
		},
		likes: {
			type: Number,
			default: 0,
		},
		user: {
			type: mongoose.Types.ObjectId,
			ref: 'user',
			required: [true, '請填寫使用者 ID'],
		},
		createdAt: { type: Date, select: false },
		updatedAt: { type: Date, select: false },
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
