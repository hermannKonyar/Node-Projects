const express = require('express');
const router = express.Router();


const data = {
    title:'Naber?',
    categories: [
        'Web Geliştirme',
        'Mobil Geliştirme',
        'Yapay Zeka',
        'Oyun Geliştirme',
        'Veri Bilimi',
    ]
}

router.use('/blog-details', (req, res, next) => {
    res.render('users/blog-details');
});
router.use('/blogs', (req, res, next) => {
    res.render('users/blogs');
});
router.use('/', (req, res, next) => {
    res.render('users/index',data);
});

module.exports = router;