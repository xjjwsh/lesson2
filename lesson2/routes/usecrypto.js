/**
 * Created by wangsh on 2016/3/16.
 */
var express = require('express');
var router = express.Router();
var crypto = require('crypto');

router.get('/', function(req, res) {
    res.render('usecrypto', { title: '�����ַ���ʾ��' });
});


router.post('/',function(req, res){
    var
        userName = req.body.txtUserName,
        userPwd = req.body.txtUserPwd;

    //���ɿ����ɢ��ֵ
    var md5 = crypto.createHash('md5');   //cryptoģ�鹦���Ǽ��ܲ����ɸ���ɢ��
    var en_upwd = md5.update(userPwd).digest('hex');

    console.log('���ܺ������:'+en_upwd);

    res.render('usecrypto', { title: '�����ַ���ʾ��' });
});

module.exports = router;