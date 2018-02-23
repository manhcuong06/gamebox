var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  res.render('site/index');
});

router.get('/about', (req, res) => {
  res.render('site/about');
});

router.get('/contact', (req, res) => {
  res.render('site/contact');
});

router.get('/detail/:id', (req, res) => {
  res.render('site/detail');
});

router.get('/gallery', (req, res) => {
  res.render('site/gallery');
});

router.get('/news', (req, res) => {
  res.render('site/news');
});

router.get('/reviews', (req, res) => {
  res.render('site/reviews');
});

module.exports = router;
