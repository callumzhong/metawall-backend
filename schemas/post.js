const Joi = require('joi');
const { JoiObjectId } = require('./helper');

module.exports = {
	createdPost: Joi.object({
		content: Joi.string().required(),
		user: JoiObjectId().required(),
		image: Joi.string(),
		likes: Joi.number(),
	}),
};
