const express = require('express');
const router = express.Router();
const postRouter = require('./post/post');

router.use('/posts', postRouter);

module.exports = router;
