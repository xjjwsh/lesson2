/**
 * Created by wangsh on 2016/3/17.
 */
var mysql  = require('mysql');  //调用MySQL模块

var db_config = {
    host     : '127.0.0.1',       //主机
    user     : 'root',               //MySQL认证用户名
    password : 'able@2015',        //MySQL认证用户密码
    port: '3306',                   //端口号
    database:'mi',
    charset:'utf8'
};

//创建一个connection
var connection = mysql.createConnection( db_config );

 //创建一个connection
 connection.connect(function(err){
 if(err){
 console.log('[query] - :'+err);
 return;
 }
 console.log('[connection connect]  succeed!');
 });

var  userAddSql = 'INSERT INTO office(Id,code,name) VALUES(0,?,?)';
var  userAddSql_Params = ['yfb1', '研发部1'];

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
//执行SQL语句
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

//关闭connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});