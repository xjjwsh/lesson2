var express = require('express');
var router = express.Router();
var usercookiesdo = require('../controllers/usecookies');

router.get('/', usercookiesdo.get);

router.post('/', usercookiesdo.post );

module.exports = router;