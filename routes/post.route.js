const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const postValidation = require('../validations/post.validation');
const validator = require('../middleWares/validator');

router.get('/:id', validator(postValidation.getOne), postController.getOne);
router.post('/', validator(postValidation.create), postController.create);
router.patch('/:id', validator(postValidation.update), postController.update);
router.delete(
	'/:id',
	validator(postValidation.deleteOne),
	postController.deleteOne,
);

module.exports = router;
