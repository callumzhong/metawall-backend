const Joi = require('joi');
const { JoiObjectId } = require('./helper');

module.exports = {
	createdPost: Joi.object({
		content: Joi.string().required(),
		user: JoiObjectId().required(),
		image: Joi.string().length(),
		likes: Joi.number(),
	}),
	getPagination: Joi.object({
		sort: Joi.string().valid('asc', 'desc'),
		q: Joi.string(),
		page: Joi.number(),
	}),
};
