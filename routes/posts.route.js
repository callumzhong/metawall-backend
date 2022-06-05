const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const validator = require('../middleWares/validator');
const postValidation = require('../validations/post.validation');

router.get(
	'/',
	validator(postValidation.getPagination),
	postController.getPagination,
);
router.delete('/', postController.deleteAll);

module.exports = router;
