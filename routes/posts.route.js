const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const validator = require('../middleware/validator');
const postValidation = require('../validations/post.validation');

/**
 * GET /api/posts
 * @summary 取得貼文分頁
 * @tags posts
 * @param {number} page.query - 頁數
 * @param {number} page.q - 關鍵字查詢
 * @param {string} sort.query - 請輸入 asc || desc 兩種排序, 預設 asc
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get(
	'/',
	validator(postValidation.getPagination),
	postController.getPagination,
);
router.delete('/', postController.deleteAll);

module.exports = router;
