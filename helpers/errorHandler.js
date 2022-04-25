const HEADERS = require('../constants/headers');
const CustomizeError = require('../exception/customizeError');

const ErrorHandler = ({ res, error }) => {
	if (error.name === 'ValidationError') {
		for (key in error.errors) {
			error.errors[key] = error.errors[key].message;
		}
		res.writeHead(400, HEADERS);
		res.write(
			JSON.stringify({
				status: 'ERROR',
				message: error.errors,
			}),
		);
		res.end();
		console.log(`errors: ${JSON.stringify(error.errors)}`);
		return;
	}
	if (error instanceof CustomizeError) {
		res.writeHead(400, HEADERS);
		res.write(
			JSON.stringify({
				status: 'ERROR',
				message: error.message,
			}),
		);
		res.end();
		console.log(`errors: ${error.message}`);
		return;
	}
	res.writeHead(400, HEADERS);
	res.write(
		JSON.stringify({
			status: 'ERROR',
			message: error,
		}),
	);
	res.end();
	// heroku logs an error
	console.log(`alert: ${error.message}`);
	return;
};

module.exports = ErrorHandler;
