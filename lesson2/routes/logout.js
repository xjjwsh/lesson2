/**
 * Created by wangsh on 2016/3/17.
 */
var express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;