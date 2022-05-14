const mongoose = require('mongoose');
const PostConn = require('../connections/postConn');

const PostSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, '姓名未填寫'],
		},
		tags: [
			{
				type: Array,
				default: [],
			},
		],
		type: {
			type: String,
			enum: ['group', 'person'],
			required: [true, '類型未填寫'],
		},
		image: {
			type: String,
			default: '',
		},
		createdAt: {
			type: Date,
			default: Date.now,
			select: false,
		},
		content: {
			type: String,
			required: [true, '貼文內容未填寫'],
		},
		likes: {
			type: Array,
			default: [],
		},
		comments: {
			type: Array,
			default: [],
		},
	},
	{
		versionKey: false,
		timestamps: true,
	},
);

const Post = PostConn.model('Post', PostSchema);

module.exports = Post;
