const PostHandler = require('../service/postHandler');

module.exports = {
	getPagination: async (req, res, next) => {
		/*
		#swagger.tags = ['posts']
		#swagger.summary = '取得多筆貼文 - 分頁'
		#swagger.parameters['sort'] = {
				in: 'query',
				description: '排序 ( asc || desc ) ',
    }
		#swagger.parameters['q'] = {
				in: 'query',
				description: '查詢',
    }
		#swagger.parameters['page'] = {
				in: 'query',
				description: '分頁數',
    }
		#swagger.responses[200] = {
				schema: {"$ref":"#/definitions/PostPagination"},
		}
		*/
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
		/*
		#swagger.tags = ['posts']
	 	#swagger.summary = '新增貼文'
		#swagger.parameters['obj'] = {
				in:'body',
				description: '貼文資料',
				required: true,
		  	schema: {"$ref": "#/definitions/PostBody"},
		}
		#swagger.responses[201] = {
		  	schema: {"$ref": "#/definitions/PostCreated"},
		} 
		*/
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
