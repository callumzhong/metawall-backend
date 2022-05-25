const ErrorHandler = async (err, req, res, next) => {
	res.status(400).json({
		status: 'ERROR',
		message: err.message,
	});
};

module.exports = ErrorHandler;
