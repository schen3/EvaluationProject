var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/test', function(req, res, next) { 
  req.session.he = "he";	
  req.session.save();
  res.render('index');
});

router.get('/test1', function(req, res, next) { 
  req.session.he = "he";	
  req.session.save();
  res.render('index');
});

module.exports = router;
