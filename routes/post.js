const express = require('express');
const router = express.Router();
const PostController = require('../controllers/posts');
const Validator = require('../middlewares/validator');
const PostSchema = require('../schemas/post');
router.get(
	'/',
	Validator(PostSchema.getPagination, 'query'),
	PostController.getPagination,
);
router.get(
	'/:id',
	/**
	 * #swagger.tags = ['posts']
	 * #swagger.description = '取得指定 ID 貼文'
	 */
	PostController.getOne,
);
router.post(
	'/',
	Validator(PostSchema.createdPost, 'body'),
	PostController.created,
);
router.patch(
	'/:id',
	/**
	 * #swagger.tags = ['posts']
	 * #swagger.description = '更新貼文'
	 */
	PostController.updated,
);
router.delete(
	'/',
	/**
	 * #swagger.tags = ['posts']
	 * #swagger.description = '刪除全部貼文'
	 */
	PostController.deleteAll,
);
router.delete(
	'/:id',
	/**
	 * #swagger.tags = ['posts']
	 * #swagger.description = 刪除指定 ID 貼文'
	 */
	PostController.deleteOne,
);

module.exports = router;
