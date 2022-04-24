const ErrorHandler = require('../helpers/errorHandler');
const response = require('../helpers/response');

const PATH = '/posts';
const postsRoute = ({ req, res, data: posts }) => {
	const { url, method } = req;
	let body = '';
	req.on('data', (chunk) => {
		body += chunk;
	});
	if (method === 'OPTIONS') {
		res.writeHead(200, headers);
		res.end();
		return;
	}
	if (url === PATH && method === 'GET') {
		response.success({
			res,
			status: 200,
			data: posts,
		});
		return;
	}
	if (url.startsWith(PATH + '/') && method === 'GET') {
		try {
			response.success({
				res,
				status: 200,
				data: {},
			});
		} catch (error) {
			ErrorHandler({ res, error });
		}
	}
	if (url === PATH && method === 'POST') {
		req.on('end', () => {
			try {
				response.success({
					res,
					status: 200,
					data: posts,
				});
			} catch (error) {
				ErrorHandler({ res, error });
			}
		});
	}
	if (url.startsWith(PATH + '/') && method === 'PATCH') {
		try {
			response.success({
				res,
				status: 200,
				data: posts,
			});
		} catch (error) {
			ErrorHandler({ res, error });
		}
	}

	if (url === PATH && method === 'DELETE') {
		response.success({
			res,
			status: 200,
			data: posts,
		});
		return;
	}

	if (url.startsWith(PATH + '/') && method === 'DELETE') {
		try {
			response.success({
				res,
				status: 200,
				data: posts,
			});
		} catch (error) {
			ErrorHandler({ res, error });
		}
		return;
	}
};
module.exports = postsRoute;
