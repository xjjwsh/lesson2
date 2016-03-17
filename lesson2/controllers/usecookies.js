/**
 * Created by wangsh on 2016/3/16.
 */
exports.get = function(req, res) {
    if(req.session.islogin)
    {
        console.log('usecookies:' + req.session.islogin);
        res.locals.islogin = req.session.islogin;
    }
    res.render('usecookies', { title: '使用cookies示例' });
}

exports.post = function(req, res) {
    req.session.islogin = 'success';
    res.locals.islogin = req.session.islogin;
    res.render('usecookies', { title: '使用cookies示例' });
}