const Joi = require('joi');

const signUp = {
	body: Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).required(),
		confirmPassword: Joi.string().min(8).required(),
		name: Joi.string().required(),
	}),
};

const signIn = {
	body: Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).required(),
	}),
};

const updatePassword = {
	body: Joi.object({
		password: Joi.string().min(8).required(),
		confirmPassword: Joi.string().min(8).required(),
	}),
};

const updateProfile = {
	body: Joi.object({
		name: Joi.string(),
		email: Joi.string().email(),
	}),
};

module.exports = {
	signUp,
	signIn,
	updatePassword,
	updateProfile,
};
