const Joi = require('joi');
const { JoiObjectId } = require('../../helpers/validator');

module.exports = {
	createdPost: Joi.object({
		content: Joi.string().required(),
		user: JoiObjectId().required(),
		image: Joi.string(),
		likes: Joi.number(),
	}),
	getPagination: Joi.object({
		sort: Joi.string().valid('asc', 'desc'),
		q: Joi.string(),
		page: Joi.number(),
	}),
};
