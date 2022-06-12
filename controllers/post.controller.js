const postService = require('../service/post.service');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/appError');

const getPagination = catchAsync(async (req, res, next) => {
	const query = {
		page: Number(req.query.page) || 1,
		q: req.query.q || '',
		sort: req.query.sort || 'asc',
	};
	const pages = await postService.getPagination(query);
	res.status(200).json(pages);
});

const create = catchAsync(async (req, res, next) => {
	const result = await postService.create(req.body);
	if (typeof createdPost === 'string') {
		throw new AppError(400, result);
	}
	res.status(201).json(result);
});

const getOne = catchAsync(async (req, res, next) => {
	const result = await postService.getOne(req.params.id);
	if (!result) {
		throw new AppError(404, result);
	}
	res.status(200).json(result);
});

const update = catchAsync(async (req, res, next) => {
	const result = await postService.update(req.params.id, req.body);
	if (typeof result === 'string') {
		throw new AppError(404, result);
	}
	res.status(200).json(result);
});

const deleteAll = catchAsync(async (req, res, next) => {
	await postService.deleteAll();
	res.status(200).json();
});

const deleteOne = catchAsync(async (req, res, next) => {
	const result = await postService.deleteOne(req.params.id);
	if (!result) {
		throw new AppError(404, result);
	}
	res.status(200).json(result);
});

module.exports = {
	getPagination,
	create,
	getOne,
	update,
	deleteOne,
	deleteAll,
};
