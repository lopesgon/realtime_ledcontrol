var express = require('express');
var router = express.Router();
var obj_checkbox = require('../metier/obj_ck_singleton');

/* GET home page. */
router.get('/', function(req, res, next) {
  var obj = obj_checkbox.getInstance(false);
  obj.setSocket('');
  res.render('index', obj);
});

module.exports = router;