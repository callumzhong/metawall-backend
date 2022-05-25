const express = require('express');
const router = express.Router();
const PostController = require('../../controllers/posts');
const Validator = require('../../middlewares/validator');
const schema = require('./schema');
router.get(
	'/',
	Validator(schema.getPagination, 'query'),
	PostController.getPagination,
);
router.get('/:id', PostController.getOne);
router.post('/', Validator(schema.createdPost, 'body'), PostController.created);
router.patch('/:id', PostController.updated);
router.delete('/', PostController.deleteAll);
router.delete('/:id', PostController.deleteOne);

module.exports = router;
