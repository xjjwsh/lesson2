/**
 * Created by wangsh on 2016/3/17.
 */
var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : '127.0.0.1',       //主机
    user     : 'root',               //MySQL认证用户名
    password : 'able@2015',        //MySQL认证用户密码
    port: '3306',                   //端口号
    database:'mi',
    charset:'utf8'
});

pool.getConnection(function(err, connection) {

    connection.query( 'SELECT * FROM office;', function(err, result) {
        console.log(result);
        connection.release();
    });

    connection.query( 'SELECT * FROM office;', function(err, result) {

        console.log(result);
        connection.release();

    });
});