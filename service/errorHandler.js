// 錯誤處理程序
const CustomizeError = require('../exception/customizeError');
/**
 * 定義參考
 * https://zamhuang.medium.com/linux-%E5%A6%82%E4%BD%95%E5%8D%80%E5%88%86-log-level-216b975649a4
 */
const ErrorHandler = async (err, req, res, next) => {
	// mongoose models require error
	if (err.name === 'ValidationError') {
		for (key in err.errors) {
			err.errors[key] = err.errors[key].message;
		}
		res.status(400).json({
			status: 'ERROR',
			message: err.errors,
		});
		return;
	}
	if (err instanceof CustomizeError) {
		res.status(400).json({
			status: 'ERROR',
			message: err.message,
		});
		return;
	}
	if (err instanceof SyntaxError) {
		res.status(400).json({
			status: 'ERROR',
			message: 'JSON syntax error',
		});
		return;
	}
	res.status(400).json({
		status: 'ERROR',
		message: err.message,
	});
};

module.exports = ErrorHandler;
