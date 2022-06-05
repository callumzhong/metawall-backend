const PostHandler = require('../service/postHandler');

module.exports = {
	getPagination: async (req, res, next) => {
		const query = {
			page: req.query.page || 1,
			q: req.query.q || '',
			sort: req.query.sort || 'asc',
		};
		const pages = await PostHandler.getPagination(query);
		res.status(200).json({
			status: 'SUCCESS',
			data: pages,
		});
	},
	getOne: (req, res, next) => {
		res.status(200).json({});
	},
	created: async (req, res, next) => {
		const createdPost = await PostHandler.created(req.body);
		res.status(201).json({
			status: 'SUCCESS',
			data: createdPost,
		});
	},
	updated: (req, res, next) => {
		res.status(200).json({});
	},
	deleteAll: (req, res, next) => {
		res.status(200).json({});
	},
	deleteOne: (req, res, next) => {
		res.status(200).json({});
	},
};
