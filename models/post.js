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
			ref: 'User',
			required: [true, '請填寫使用者 ID'],
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

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;
