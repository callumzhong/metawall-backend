const PostHandler = require('../service/postHandler');

module.exports = {
	getPagination: async (req, res, next) => {
		/*
		 * #swagger.tags = ['posts']
		 * #swagger.description = '取得依分頁取得貼文'
		 */
		/* #swagger.parameters['page'] = {
				in: 'query',
				description: '分頁數',
    }	*/
		/* #swagger.parameters['q'] = {
				in: 'query',
				description: '查詢',
    }	*/
		/* #swagger.parameters['sort'] = {
				in: 'query',
				description: '排序 ( arc || desc ) ',
    }	*/

		const page = req.query.page || 1;
		const q = req.query.q || null;
		const sort = req.query.sort || null;

		/* #swagger.responses[200] = {
		  	schema: {"$ref": "#/definitions/PostPage"},
				description: "取得分頁資料" }*/
		res.status(200).json();
	},
	getOne: (req, res, next) => {
		/* #swagger.responses[200] = {
		  	schema: {"$ref": "#/definitions/Post"},
				description: "取得單筆資料" } */
		res.status(200).json({});
	},
	created: async (req, res, next) => {
		/**
		 * #swagger.tags = ['posts']
		 * #swagger.summary = '新增貼文'
		 */
		/* #swagger.parameters['obj'] = {
				in:'body',
				description: '貼文資料',
				required: true,
		  	schema: {"$ref": "#/definitions/PostBody"},
		} */
		/* #swagger.responses[200] = {
		  	schema: {"$ref": "#/definitions/PostCreated"},
				description: "新增成功"
		} */
		const createdPost = await PostHandler.created(req.body);
		res.status(200).json({
			status: 'SUCCESS',
			data: createdPost,
		});
	},
	updated: (req, res, next) => {
		/* #swagger.parameters['id'] = { description: '貼文 Id' } */
		/* #swagger.parameters['obj'] = {
				in:'body',
				description: '貼文資料',
				required: true,
		  	schema: {"$ref": "#/definitions/PostBody"},
		} */

		/* #swagger.responses[200] = {
		  	schema: {"$ref": "#/definitions/Post"},
				description: "更新成功" 
		}*/

		/* #swagger.responses[404] = {
				schema:"查無貼文",
				description: "更新失敗" 
		}*/
		res.status(200).json({});
	},
	deleteAll: (req, res, next) => {
		/* #swagger.responses[200] = {
				description: "刪除成功" 
		} */
		res.status(200).json({});
	},

	deleteOne: (req, res, next) => {
		/* #swagger.responses[200] = {
				description: "刪除成功" 
		} */
		/* #swagger.responses[404] = {
				schema:"查無貼文",
				description: "刪除失敗" 
		}*/
		res.status(200).json({});
	},
};
