const Validator = (joiSchema, source) => async (req, res, next) => {
	try {
		const { error } = await joiSchema.validateAsync(req[source]);
		if (!error) {
			return next();
		}
		const details = error.details;
		next(new Error(details.message));
	} catch (error) {
		next(error);
	}
};

module.exports = Validator;
