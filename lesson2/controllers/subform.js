/**
 * Created by wangsh on 2016/3/16.
 */
exports.formget = function(req, res) {
    var
        userName = req.query.txtUserName,
        userPwd = req.query.txtUserPwd,
        userName2 = req.param('txtUserName'),
        userPwd2 = req.param('txtUserPwd');

    console.log('req.query我的姓名 :'+userName);
    console.log('req.query����:'+userPwd);
    console.log('req.param�û���:'+userName2);
    console.log('req.param����:'+userPwd2);

    res.render('subform', { title: '�ύ�������ղ���ʾ��' });
}

exports.formpost = function(req, res) {
    var
        userName = req.body.txtUserName,
        userPwd = req.body.txtUserPwd,
        userName2 = req.param('txtUserName'),
        userPwd2 = req.param('txtUserPwd');
    console.log('req.body�û���:'+userName);
    console.log('req.body����:'+userPwd);
    console.log('req.param�û���:'+userName2);
    console.log('req.param����:'+userPwd2);
}
