const express = require('express');
const router = express.Router();
const path = require('path');

router.use('/admin', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views/admin', 'blog-list.html'));
});


module.exports = router;
