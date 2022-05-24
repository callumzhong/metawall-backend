const mongoose = require('mongoose');
const { MONGO_PASSWORD, MONGO_USERNAME, MONGO_DB_NAME, MONGO_HOST } =
	process.env;

mongoose
	.connect(
		`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}?retryWrites=true&w=majority`,
	)
	.catch((error) => {
		console.error(error);
	});
