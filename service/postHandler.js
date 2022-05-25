const Post = require('../models/post');
const User = require('../models/user');

module.exports = {
	getPagination: async (query) => {
		const sortParams = query.sort === 'asc' ? 'createdAt' : '-createdAt';
		const q = query.q.trim ? { content: new RegExp(query.q) } : {};
		let page = parseInt(query.page);
		const pageSize = 20;

		const postCount = await Post.find(q).count();
		const totalPages = Math.ceil(postCount / pageSize);
		if (page > totalPages) {
			page = totalPages;
		}
		const post = await Post.find(q)
			.populate({
				path: 'user',
				select: 'name photo',
			})
			.sort(sortParams)
			.skip((page - 1) * pageSize)
			.limit(pageSize);

		return {
			data: post,
			paging: {
				currentPage: page,
				totalPage: totalPages,
				hasPre: page > 1 ? true : false,
				hasNext: page >= totalPages ? false : true,
			},
		};
	},
	getOne: async (id) => {},
	created: async (data) => {
		const post = await Post.create(data);
		return post;
	},
	updated: async () => {},
	deleteAll: async () => {},
	deleteOne: async () => {},
};
