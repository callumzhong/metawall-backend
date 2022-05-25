const Post = require('../models/post');

module.exports = {
	getPagination: async () => {},
	getAll: async () => {},
	getOne: async () => {},
	created: async (data) => {
		const createdPost = await Post.create(data);
		return createdPost;
	},
	updated: async () => {},
	deleteAll: async () => {},
	deleteOne: async () => {},
};
