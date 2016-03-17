/**
 * Created by wangsh on 2016/3/16.
 */
var express = require('express');
var router = express.Router();

var formdo = require('../controllers/subform');

/* GET home page. */
router.get('/', formdo.formget);

router.post('/',formdo.formpost);

module.exports = router;

