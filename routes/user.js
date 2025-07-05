const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/blogs/:blogid', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/users', 'blog-details.html'));
});
router.use('/blogs', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/users', 'blogs.html'));
});

router.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/users', 'index.html'));
});

module.exports = router;