const express = require('express');
const router = express.Router();

router.use('/admin', (req, res, next) => {
    res.render('admin/blog-list');
});


module.exports = router;
