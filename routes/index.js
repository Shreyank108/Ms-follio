var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/me', function(req, res, next) {
  res.render('me');
});
router.get('/achievements', function(req, res, next) {
  res.render('achievement');
});
router.get('/experiences', function(req, res, next) {
  res.render('experiences');
});
router.get('/back', function(req, res, next) {
  res.redirect('/');
});
router.get('/myport', function(req, res, next) {
  res.render('purple');
});
router.get('/home', function(req, res, next) {
  res.render('home');
});
router.get('/skill', function(req, res, next) {
  res.render('skilla');
});
router.get('/blender_projects', function(req, res, next) {
  res.render('blender_proj');
});
router.get('/mobile_view', function(req, res, next) {
  res.render('mobile');
});

module.exports = router;
