/**
 * Created by wangsh on 2016/3/16.
 */

exports.index = function (req, res, next) {
    res.render('index', { title: 'hello Express' });
}