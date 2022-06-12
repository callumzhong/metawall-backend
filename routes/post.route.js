const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const postValidation = require('../validations/post.validation');
const validator = require('../middlewares/validator');

/**
 * @typedef {object} AddPost
 * @property {string} content.required
 * @property {string} user.required
 * @property {string} image
 */

/**
 * @typedef {object} UpdatePost
 * @property {string} content
 * @property {string} image
 */

/**
 * GET /api/post/{id}
 * @summary 取得單筆貼文資訊
 * @tags post
 * @param {string} id.path.required - PostId
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get('/:id', validator(postValidation.getOne), postController.getOne);

/**
 * POST /api/post
 * @summary 新增貼文
 * @tags post
 * @param {AddPost} request.body.required - post info
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.post('/', validator(postValidation.create), postController.create);

/**
 * PATCH /api/post/{id}
 * @summary 更新貼文
 * @tags post
 * @param {string} id.path.required - PostId
 * @param {UpdatePost} request.body.required - post info
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.patch('/:id', validator(postValidation.update), postController.update);

/**
 * DELETE /api/post/{id}
 * @summary 刪除貼文
 * @tags post
 * @param {string} id.path.required - PostId
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.delete(
	'/:id',
	validator(postValidation.deleteOne),
	postController.deleteOne,
);

module.exports = router;
