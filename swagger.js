const swaggerAutogen = require('swagger-autogen')();
const doc = {
	info: {
		title: 'Meta API',
		description: 'Rest API documentation',
	},
	host: 'localhost:3000',
	schemes: ['http'],
	definitions: {
		PostBody: {
			$content: '貼文內容',
			$user: '628e32cb7e25476fec99ff8d',
			image: 'https://unsplash.com/photos/gKXKBY-C-Dk',
		},
		PostCreated: {
			content: '123',
			image: '',
			likes: 0,
			user: '628e32cb7e25476fec99ff8d',
			_id: '628e36fb3bb323334a0a82c9',
			createdAt: '2022-05-25T14:02:35.950Z',
		},
		PostPagination: {
			data: [
				{
					_id: '628e34707a9f563b8484def7',
					content: '123',
					image: '',
					likes: 0,
					user: {
						_id: '628e32cb7e25476fec99ff8d',
						name: '洧杰',
						photo: '',
					},
				},
			],
			paging: {
				currentPage: 1,
				totalPage: 1,
				hasPre: false,
				hasNext: false,
			},
		},
	},
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./app.js'];

// NOTE: if you use the express Router, you must pass in the
// 'endpointsFiles' only the root file where the route starts.

swaggerAutogen(outputFile, endpointsFiles, doc);
