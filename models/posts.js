const { model, Schema } = require('mongoose');

const tagsValidator = (val) => {
	return Array.isArray(val) && val.every((v) => typeof v === 'string');
};
const Posts = model(
	'Posts',
	new Schema(
		{
			name: {
				type: String,
				required: [true, '貼文姓名必填'],
				cast: false,
			},
			tags: {
				type: [String],
				validate: [tagsValidator, 'tags is not a valid'],
			},
			type: {
				type: String,
				cast: false,
			},
			image: {
				type: String,
				cast: false,
			},
			content: {
				type: String,
				cast: false,
			},
			likes: {
				type: Number,
				cast: false,
			},
			comments: {
				type: Number,
				cast: false,
			},
		},
		{
			versionKey: false,
			timestamps: true,
		},
	),
);

module.exports = Posts;
