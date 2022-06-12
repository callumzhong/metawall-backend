const express = require('express');
const router = express.Router();
const postsRouter = require('./posts.route');
const postRouter = require('./post.route');
const userRouter = require('./user.route');

router.use('/posts', postsRouter);
router.use('/post', postRouter);
router.use('/user', userRouter);

module.exports = router;
