const HEADERS = require('../constants/headers');

const ErrorHandler = ({ res, error }) => {
	// 程式設計以外的錯誤 (無法預知 bug)
	res.writeHead(400, HEADERS);
	res.write(
		JSON.stringify({
			status: 'ERROR',
			message: `alert: ${error.message}`,
		}),
	);
	res.end();
	return;
};

module.exports = ErrorHandler;
