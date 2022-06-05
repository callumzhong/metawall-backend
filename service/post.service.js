const Post = require('../models/post.model');
const User = require('../models/user.model');

const calculatePagination = async (query, page, pageSize = 10) => {
	const count = await Post.find(query).count();
	const totalPages = Math.ceil(count / pageSize);
	const result = {
		currentPage: 0,
		totalPages: 0,
		hasPre: false,
		hasNext: false,
	};

	if (count === 0) {
		return result;
	}

	result.currentPage = page > totalPages ? totalPages : page;
	result.totalPages = totalPages;
	result.hasPre = result.currentPage > 1 ? true : false;
	result.hasNext = result.currentPage >= totalPages ? false : true;

	return result;
};

const getPagination = async (query) => {
	const { sort, page, q } = query;
	const sortParams = sort === 'asc' ? 'createdAt' : '-createdAt';
	const filter = q.trim() ? { content: new RegExp(q) } : {};
	const pageSize = 10;
	const pageData = await calculatePagination(filter, page, pageSize);
	const result = {
		data: [],
		paging: pageData,
	};

	if (pageData.totalPages === 0) {
		return result;
	}
	const post = await Post.find(filter)
		.populate({
			path: 'user',
			select: 'name photo',
		})
		.sort(sortParams)
		.skip((pageData.currentPage - 1) * pageSize)
		.limit(pageSize);

	result.data = post;
	return result;
};

const getOne = async (id) => {
	const post = await Post.findById(id);
	return post;
};

const create = async (data) => {
	const { user: userId, image, content } = data;
	const isExist = await User.findById(userId).exec();
	if (!isExist) {
		return '用戶不存在';
	}

	const post = await Post.create({
		user: userId,
		image,
		content: content.trim(),
	});
	return post;
};
const update = async (data) => {
	const { id, content, image } = data;
	const post = await Post.findByIdAndUpdate(id, {
		content,
		image,
	});

	if (!post) {
		return '貼文不存在';
	}

	return post;
};
const deleteAll = async () => {
	await Post.deleteMany();
};

const deleteOne = async (id) => {
	const post = await Post.findByIdAndDelete(id);
	if (!post) {
		return '查無資料';
	}
	return post;
};

module.exports = {
	getPagination,
	getOne,
	create,
	update,
	deleteAll,
	deleteOne,
};
