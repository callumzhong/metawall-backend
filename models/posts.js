const { model, Schema } = require('mongoose');

const Posts = model(
	'Posts',
	new Schema(
		{
			name: {
				type: String,
				required: [true, '貼文姓名必填'],
			},
			tags: {
				type: [String],
			},
			type: {
				type: String,
			},
			image: {
				type: String,
			},
			content: {
				type: String,
			},
			likes: {
				type: Number,
			},
			comments: {
				type: Number,
			},
			createdAt: {
				type: Date,
				default: Date.now,
			},
			updatedAt: {
				type: Date,
			},
		},
		{
			versionKey: false,
		},
	),
);

module.exports = Posts;
