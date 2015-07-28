var express = require('express');
var router = express.Router();

/* GET home page. */
// we are using / instead of /about because it's using its own route file
router.get('/', function(req, res, next) {
    res.render('about', { title: 'About', websiteTitle: 'Basic Website' });
});

module.exports = router;
