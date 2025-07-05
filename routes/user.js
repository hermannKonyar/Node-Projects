const express = require('express');
const router = express.Router();

router.use('/blog-details', (req, res, next) => {
    res.render('users/blog-details');
});
router.use('/blogs', (req, res, next) => {
    res.render('users/blogs');
});
router.use('/', (req, res, next) => {
    res.render('users/index');
});

module.exports = router;