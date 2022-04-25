const http = require('http');
const mongoose = require('mongoose');
const DATABASE = require('./config');
const postsRoute = require('./routes/posts');
const PORT = process.env.PORT || 3005;
const posts = [];
mongoose
	.connect(DATABASE)
	.then(() => {
		console.log('database: 資料庫連線成功');
	})
	.catch((error) => {
		console.log(`database: 連線失敗 ${error.message}`);
	});
const listener = (req, res) => {
	postsRoute({ req, res, data: posts });
};

const server = http.createServer(listener);
server.listen(PORT, () => {
	console.log('listening on port ' + PORT);
});
