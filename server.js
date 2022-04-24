const http = require('http');
const PORT = process.env.PORT || 3005;
const listener = (req, res) => {
	console.log('test');
};

const server = http.createServer(listener);
server.listen(PORT, () => {
	console.log('listening on port ' + PORT);
});
