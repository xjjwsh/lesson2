/**
 * Created by wangsh on 2016/3/17.
 */
var mysql  = require('mysql');  //����MySQLģ��

var db_config = {
    host     : '127.0.0.1',       //����
    user     : 'root',               //MySQL��֤�û���
    password : 'able@2015',        //MySQL��֤�û�����
    port: '3306',                   //�˿ں�
    database:'mi',
    charset:'utf8'
};

//����һ��connection
var connection = mysql.createConnection( db_config );

 //����һ��connection
 connection.connect(function(err){
 if(err){
 console.log('[query] - :'+err);
 return;
 }
 console.log('[connection connect]  succeed!');
 });

var  userAddSql = 'INSERT INTO office(Id,code,name) VALUES(0,?,?)';
var  userAddSql_Params = ['yfb1', '�з���1'];

var userupdatesql = ' update office set name = ? where id=? ';
var userupdate_params = ['yanfabu',7];

var usergetsql = " select * from office " ;



/*
connection.query(userAddSql,userAddSql_Params,function (err, result) {
    if(err){
        console.log('[INSERT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('INSERT ID:',result);
    console.log('-----------------------------------------------------------------\n\n');
});
*/
/*
connection.query(userupdatesql,userupdate_params,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }
    console.log('--------------------------UPDATE----------------------------');
    console.log('UPDATE affectedRows',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});
*/
//ִ��SQL���
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
    console.log('The solution is: ', rows[0].solution);
});

connection.query(usergetsql,function (err, result) {
    if(err){
        console.log('[SELECT ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------SELECT----------------------------');
    console.log(result);
    console.log('-----------------------------------------------------------------\n\n');
});

//�ر�connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});