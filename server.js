const http = require('http');
const postsRoute = require('./routes/posts');
const PORT = process.env.PORT || 3005;
const posts = [];
const listener = (req, res) => {
	postsRoute({ req, res, data: posts });
};

const server = http.createServer(listener);
server.listen(PORT, () => {
	console.log('listening on port ' + PORT);
});
