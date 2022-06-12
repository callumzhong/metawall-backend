const Joi = require('joi');
const { JoiObjectId } = require('../helpers/validator');

const getPagination = {
	body: Joi.object({
		sort: Joi.string().valid('asc', 'desc'),
		q: Joi.string(),
		page: Joi.number(),
	}),
};

const create = {
	body: Joi.object({
		content: Joi.string().required(),
		user: JoiObjectId().required(),
		image: Joi.string(),
		likes: Joi.number(),
	}),
};

const getOne = {
	params: Joi.object({
		id: JoiObjectId().required(),
	}),
};

const deleteOne = {
	params: Joi.object({
		id: JoiObjectId().required(),
	}),
};

const update = {
	params: Joi.object({
		id: JoiObjectId().required(),
	}),
	body: Joi.object({
		content: Joi.string().required(),
		image: Joi.string(),
	}),
};

module.exports = {
	getPagination,
	create,
	getOne,
	update,
	deleteOne,
};
