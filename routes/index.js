const express = require('express');
const router = express.Router();
const postsRouter = require('./posts.route');
const postRouter = require('./post.route');

router.use('/posts', postsRouter);
router.use('/post', postRouter);

module.exports = router;
